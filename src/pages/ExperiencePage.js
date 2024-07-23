import React from "react";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import WorkExperiences from "../components/organisms/WorkExperiences";
import EducationExperiences from "../components/organisms/EducationExperiences";
import Skills from "../components/organisms/Skills";


const ExperiencePage = () => {
    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <WorkExperiences />
                <EducationExperiences />
                <Skills />
            </MainContent>
            <RightContent>
                ..
            </RightContent>
        </PageWrapper>
    );
}

export default ExperiencePage;