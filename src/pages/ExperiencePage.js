import React from "react";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import Experiences from "../components/organisms/Experiences";
import Education from "../components/organisms/Education";
import Skills from "../components/organisms/Skills";

const ExperiencePage = () => {
    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <Experiences />
                <Education />
                <Skills />
            </MainContent>
            <RightContent>
                ..
            </RightContent>
        </PageWrapper>
    );
}

export default ExperiencePage;