import React from "react";

const ProjectDetails = ({project}) => {
    /* This component is used to display the short description of
    projects. Used in HomePage.js and ProjectsPage.js */

    return (
        <div className='projectDetails'>
            <p>{project.skills}</p>
            <p>{project.link}</p>
        </div>
    );
}

export default ProjectDetails;