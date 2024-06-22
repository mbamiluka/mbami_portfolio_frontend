import React from "react";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import ProjectSkills from "../components/atoms/Tag";

const ProjectDetailsPage = ({project}) => {
    
    return (
        <div className='projectDetailsPage'>
            <LeftContent/>
            <MainContent>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </MainContent>
            <RightContent>
                <ProjectSkills/>
            </RightContent>
        </div>
    );
}