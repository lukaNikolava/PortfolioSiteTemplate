import './index.css'
import experienceData from './ExperienceData.json';
import { forwardRef } from 'react';

const ExperienceComponent = forwardRef(( porps , ref) => {
    return(
        <div className="experienceSection" ref={ref}>
            {
                experienceData.map((data , index) => (
                    <div key={index} className='experienceContainer'>
                        <div className='experienceData'>{data.date}</div>
                        <div className='experienceMainContent'>
                            <h2>{data.title}</h2>
                            <p>{data.info}</p>
                            <ul>
                                {
                                    data.technologies.map((technologieElement,index) => (
                                        <li key={index}>{technologieElement}</li>
                                    ))
                                }     
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
})
export default ExperienceComponent