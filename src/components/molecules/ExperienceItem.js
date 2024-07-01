import React from "react";
import ExpRole from "../atoms/ExpRole";

const ExperienceItem = ({ experience }) => {
    return (
        <div className="experienceItem">
            <div className="left">
                <p>
                {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                {new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
                <img src={experience.logo} 
                    style={{ width: "60px" }}
                />
            </div>
            <div className="timeline">
                <div className="circle"></div>
                <div className="coloredLine"></div>
            </div>
            <div className="right">
                <p>{experience.institution}</p>
                {experience.expRoles && Array.isArray(experience.expRoles) && experience.expRoles.map((role, index) => (
                    <ExpRole key={index} role={role} />
                ))}
                <p>{experience.achievements}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;