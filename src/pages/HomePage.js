import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../contexts/ThemeContext';
import PageWrapper from '../components/organisms/PageWrapper';
import LeftContent from '../components/organisms/LeftContent';
import MainContent from '../components/organisms/MainContent';
import RightContent from '../components/organisms/RightContent';
import Intro from '../components/atoms/Intro';
import Proficiencies from '../components/organisms/Proficiencies';


function HomePage() {
    return (
        <PageWrapper>
            <LeftContent />
            <MainContent>
                <Intro />
                <Proficiencies />
            </MainContent>
            <RightContent />
        </PageWrapper>
    );
}

export default HomePage;