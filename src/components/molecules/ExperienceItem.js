import React from "react";
import ExpRole from "../atoms/ExpRole";

const ExperienceItem = ({ experience }) => {
    const formattedStartDate = new Date(experience.startDate).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    });
    const formattedEndDate = experience.endDate 
        ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : "present";

    return (
        <div className="experienceItem">
            <div className="left">
                <p>
                    {formattedStartDate} - {formattedEndDate}
                </p>
                <img src={experience.logo} style={{ width: "60px" }} alt="Experience logo" />
            </div>
            <div className="timeline">
                <div className="circle"></div>
                <div className="coloredLine"></div>
            </div>
            <div className="right">
                <p>{experience.institution}</p>
                {experience.expRoles &&
                    Array.isArray(experience.expRoles) &&
                    experience.expRoles.map((role, index) => (
                        <ExpRole key={index} role={role} />
                    ))}
                <p>{experience.achievements}</p>
            </div>
        </div>
    );
};

export default ExperienceItem;