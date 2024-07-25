import './index.css'
import { useRef , useState , useEffect} from 'react'
import AboutMeComponent from '../AboutMeComponent'
import ExperienceComponent from '../ExperienceComponent'
import ProjectsComponent from '../ProjectsComponent'
import { HeaderComponent } from '../HeaderComponent'

const MainComponent = () =>{
    const sectionRefs = useRef([])
    const [ intersecting , setIntersecting ] = useState(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              const index = sectionRefs.current.indexOf(entry.target);
              switch (index) {
                case 0:
                  setIntersecting('about section');
                  break;
                case 1:
                  setIntersecting('experience section');
                  break;
                case 2:
                  setIntersecting('projects section');
                  break;
                default:
                  setIntersecting(null);
              }
            }
          });
        }, { threshold: 0.6 });
    
        sectionRefs.current.forEach((ref) => {
          if (ref) {
            observer.observe(ref);
          }
        });
    
        return () => {
          observer.disconnect();
        };
      }, []); 
    
    return(
      <div className="container">
        <HeaderComponent intersecting={intersecting} />
        <main>
          <AboutMeComponent ref={(el) => (sectionRefs.current[0] = el)}/>
          <ExperienceComponent ref={(el) => (sectionRefs.current[1] = el)}/>
          <ProjectsComponent ref={(el) => (sectionRefs.current[2] = el)}/>
        </main>
      </div>
    )
}
export default MainComponent