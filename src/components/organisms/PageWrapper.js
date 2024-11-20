import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UtilBar from '../molecules/UtilBar';

import NavBar from '../molecules/NavBar';

function PageWrapper({ children }) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const [isSwitchedOn, setIsSwitchedOn] = React.useState(theme === 'dark');

    return (
        <div>
            <UtilBar>
                <DarkModeSwitch
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    size={24}
                    //color={checked => (checked ? '#333' : '#fff')}
                    className='darkModeSwitch'
                />
                <NavBar
                    isActivated={isSwitchedOn}
                    setIsActivated={setIsSwitchedOn}
                />
            </UtilBar>
            
            <div className='PageWrapper'>
                {children}
            </div>
        </div>
    );
}

export default PageWrapper;