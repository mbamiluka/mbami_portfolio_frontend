import React from "react";

const ExperienceItem = ({ experience }) => {
    return (
        <div className="experienceItem">
            <div className="left">
                <p>{experience.start} - {experience.end}</p>
                <img src={experience.logo} 
                    style={{ width: "60px" }}
                />
            </div>
            <div className="timeline">
                <div className="circle"></div>
                <div className="coloredLine"></div>
            </div>
            <div className="right">
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <p>{experience.achievements}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;