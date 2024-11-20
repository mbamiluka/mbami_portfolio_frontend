import React from "react";
import LiveLink from "../atoms/LiveLink";
import Status from "../atoms/Status";
import SourceCode from "../atoms/SourceCode";

const ProjectSideBarDetails = ({project}) => {
    const statusColors = {
        ongoing: 'orange',
        completed: 'green',
        abandoned: 'red',
        starting: 'orange',
        default: 'grey'
    };

    return (
        <div className='projectSideBarDetails'>
            <div>
                <p>Associated with: {project.projectExperience.institution}</p>
                <p>Role:</p>
                {project.projectExpRoles.map((role, index) => {
                    return <p key={index}>{role.role}</p>
                })}
            </div>
            <LiveLink link={project.demo}/>
            <Status project={project}/>
        </div>
    );
}

export default ProjectSideBarDetails;