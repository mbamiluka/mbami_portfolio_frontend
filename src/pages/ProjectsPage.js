import React from "react";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import Projects from "../components/organisms/Projects";
import SideImage from "../components/atoms/SideImage";

const ProjectsPage = () => {
    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <Projects/>
            </MainContent>
            <RightContent>
                <SideImage/>
            </RightContent>
        </PageWrapper>
    );
}

export default ProjectsPage;