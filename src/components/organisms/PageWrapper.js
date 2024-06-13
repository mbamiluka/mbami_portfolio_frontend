import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function PageWrapper({ children }) {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <div>
            {/* Other header content */}
            <DarkModeSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                size={24}
                color={checked => (checked ? '#333' : '#fff')}
            />
            <p>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
            <div className='PageWrapper'>
                {children}
            </div>
        </div>
    );
}

export default PageWrapper;