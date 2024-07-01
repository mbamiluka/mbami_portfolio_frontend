import React from "react";

const ExpRole = ({ role }) => {
    return (
        <div className="expRole">
            <h3>{role.name}</h3>
            <ul>
                {role.expRoleAchievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExpRole;