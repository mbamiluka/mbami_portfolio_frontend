import React from "react";

const ProjectDetails = ({project}) => {
    return (
        <div className='projectDetails'>
            <p>{project.skills}</p>
            <p>{project.link}</p>
        </div>
    );
}

export default ProjectDetails;