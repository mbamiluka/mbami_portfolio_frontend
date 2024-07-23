import React from "react";
import Collapsible from "react-collapsible";
import Achievements from "../molecules/Achievements";

const ExpRole = ({ role }) => {
    return (
        <div className="expRole">
            <h3>{role.name}</h3>
            <Achievements achievements={role.expRoleAchievements} />
        </div>
    );
}

export default ExpRole;