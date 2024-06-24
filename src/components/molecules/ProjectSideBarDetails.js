import React from "react";

const ProjectSideBarDetails = ({project}) => {
    return (
        <div className='projectSideBarDetails'>
            <p>Associated with: {project.company}</p>
            <p>Role: {project.role}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>

        </div>
    );
}

export default ProjectSideBarDetails;