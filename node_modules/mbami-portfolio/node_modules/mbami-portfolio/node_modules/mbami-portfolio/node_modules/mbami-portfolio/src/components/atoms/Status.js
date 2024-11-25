import React from "react";

const Status = ({project}) => {
    let {status, end} = project;
    //convert end to human readable format moonth yyyy
    end = new Date(end).toLocaleString('default', { month: 'long', year: 'numeric' });
    
    const statusColors = {
        ongoing: 'var(--orange-color)',
        completed: '#008000',
        abandoned: 'var(--red-color)',
        default: 'var(--blue-color)'
    };
    let additionalText = '';

        switch (status) {
            case 'ongoing':
                additionalText = ` Expected ${end}`;
                break;
            case 'completed':
                additionalText = ` on ${end}`;
                break;
            case 'abandoned':
                additionalText = ` on ${end}`;
                break;
            default:
                additionalText = '';
    }

    return (
        <div className='status'>
            <p style={{color: statusColors[status]}}>{status}</p>
            <p className="statusAdditionalText">{additionalText}</p>
        </div>
    );
}
const additionalTextStyles = {
    color: 'var(--text-color)',
};
export default Status;