import React from 'react';

const ProficiencyItem = ({ skill }) => {
    const startDate = new Date(skill.mmStartDate);
    const endDate = skill.endDate ? new Date(skill.endDate) : new Date();
    const yoe = (endDate.getFullYear() - startDate.getFullYear()) + (endDate.getMonth() - startDate.getMonth()) / 12;
    skill.startDate = yoe.toFixed(1);

    return (
        <div className='skillItem'>
            <p>{skill.name}</p>
            <p className='yoe'>| {skill.startDate}yrs</p>
        </div>
    );
};

export default ProficiencyItem;