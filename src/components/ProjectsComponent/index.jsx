import "./index.css";
import { forwardRef } from "react";
import projectsData from "./ProjectsData.json";

const ProjectsComponent = forwardRef((props, ref) => {
    return (
        <div className="projectsSection" ref={ref}>
            {projectsData.map((data , index) => (
                <div className="projectsContainer" key={index}>
                    <div className="imageContainer">
                        <img src={ "src/assets/" + data.image } alt="oops... something went wrong" />
                    </div>
                    <div className="contentContainer">
                        <h2>{data.title}</h2>
                        <p>{data.info}</p>
                        <ul>
                            {data.technologies.map((technology, index) => (
                                <li key={index}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
});

export default ProjectsComponent;
