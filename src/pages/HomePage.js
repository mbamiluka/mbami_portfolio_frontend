import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../contexts/ThemeContext';
import PageWrapper from '../components/organisms/PageWrapper';
import LeftContent from '../components/organisms/LeftContent';
import MainContent from '../components/organisms/MainContent';
import RightContent from '../components/organisms/RightContent';
import Intro from '../components/atoms/Intro';
import Skills from '../components/organisms/Skills';
import WorkExperiences from '../components/organisms/WorkExperiences';
import EducationExperiences from '../components/organisms/EducationExperiences';
import Projects from '../components/organisms/Projects';
import SideImage from '../components/atoms/SideImage';
import HealthCheck from '../components/atoms/HealthCheck';


function HomePage() {
    return (
        <PageWrapper>
            <LeftContent />
            <MainContent>
                <Intro />
                <WorkExperiences />
                <EducationExperiences />
                <Skills />
                <Projects />
                <HealthCheck />
            </MainContent>
            <RightContent>
                <SideImage />
            </RightContent>
        </PageWrapper>
    );
}

export default HomePage;