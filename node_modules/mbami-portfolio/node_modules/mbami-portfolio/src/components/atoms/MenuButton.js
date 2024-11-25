import React from "react";

const MenuButton = ({isActive, setIsActive}) => {

    return (
        <div className={`menuButton ${isActive ? '' : 'inactive'}`} onClick={() => setIsActive(!isActive)}>
            <div className='menuIcon'>
                <div className={`bar1 ${isActive ? 'active' : ''}`}></div>
                <div className={`bar2 ${isActive ? 'active' : ''}`}></div>
                <div className={`bar3 ${isActive ? 'active' : ''}`}></div>
            </div>
                
        </div>
    );
}

export default MenuButton;