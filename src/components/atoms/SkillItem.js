import React from 'react';

const ProficiencyItem = ({ skill }) => {
    return (
        <div className='skillItem'>
            <p>{skill.name}</p>
            <p className='yoe'>| {skill.yoe}yrs</p>
        </div>
    );
};

export default ProficiencyItem;