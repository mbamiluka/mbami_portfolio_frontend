import React from 'react'
import Collapsible from 'react-collapsible'

const Achievements = ({ achievements }) => {
    return (
        <ul>
            {achievements.map((achievement, index) => (
                <Collapsible trigger={achievement.achievementDescr}
                    triggerTagName="li"
                    key={index}
                    contentContainerTagName='p'
                >
                    {achievement.achievementFullDescr}
                </Collapsible>
            ))}
        </ul>
    )
}
const collapsibleStyle = {
    'paddingLeft': '1px',
}
export default Achievements