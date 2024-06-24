import React from 'react';

const Loading = () => {
    return(
        <div style={outerStyle}>
            <div style={innerStyle}>
            </div>
        </div>
    )
}

const outerStyle = {
    textAlign: 'center', 
    padding: '20px',
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
}

const innerStyle = {
    border: '4px solid var(--border-color)',
    borderTop: '4px solid #71a882',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    animation: 'spin 2s linear infinite', // spinning animation
    marginBottom: '50px'
}

export default Loading;