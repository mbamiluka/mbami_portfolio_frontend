import React from 'react'
import Collapsible from 'react-collapsible'

const Achievements = ({ achievements }) => {
    return (
        <ul>
            {achievements.map((achievement, index) => (
                <li key={index} className="collapsibleItem">
                    <Collapsible 
                        trigger={
                            <div className="collapsibleTriggerContent">
                                <span>{achievement.achievementDescr}</span>
                                <span className="plusSymbol">+</span>
                            </div>
                        }
                        contentContainerTagName="p"
                    >
                        <p>{achievement.achievementFullDescr}</p>
                    </Collapsible>
                </li>
            ))}
        </ul>
    )
}

export default Achievements