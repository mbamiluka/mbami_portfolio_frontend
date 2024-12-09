import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import Tags from "../components/molecules/Tags";
import Loading from "../components/atoms/Loading";
import ProjectDetails from "../components/molecules/ProjectDetails";
import ProjectSideBarDetails from "../components/molecules/ProjectSideBarDetails";
import SourceCode from "../components/atoms/SourceCode";
import ProjectDescription from "../components/molecules/ProjectDescription";
import ProjectContentDisplay from "../components/organisms/ProjectContentDisplay";
import API_ENDPOINTS from "../config/api";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    try {
        useEffect(() => {
            const fetchProjectDetails = async () => {
                const response = await fetch(`${API_ENDPOINTS.PROJECT}/${id}`);
                const data = await response.json();
                setProject(data);
            };
    
            fetchProjectDetails();
        }, [id]);
    }
    catch (error) {
        console.error(error);
    }
    if (!project) {
        return (
            <PageWrapper>
                <Loading/>
            </PageWrapper>
        )
    }
    console.log(project);

    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <h2>{project.name}</h2>
                <ProjectDescription contents={project.projectContents}/>
                <ProjectContentDisplay content={project.projectContents[0]}/>
            </MainContent>
            <RightContent>
                <ProjectSideBarDetails project={project}/>
                <Tags tags={project.projectSkills}/>
            </RightContent>
        </PageWrapper>
    );
}

export default ProjectDetailsPage;