import React from "react";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";

const ProjectsPage = () => {
    return (
        <div className='projectsPage'>
            <LeftContent/>
            <MainContent>
                <h2>Projects</h2>
                full list of projects
            </MainContent>
            <RightContent/>
        </div>
    );
}

export default ProjectsPage;