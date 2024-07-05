import React, {useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import Tag from "../components/atoms/Tag";
import Tags from "../components/molecules/Tags";
import Loading from "../components/atoms/Loading";
import ProjectDetails from "../components/molecules/ProjectDetails";
import ProjectSideBarDetails from "../components/molecules/ProjectSideBarDetails";
import SourceCode from "../components/atoms/SourceCode";
import ProjectDescription from "../components/molecules/ProjectDescription";

const apiUrl = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL_DEVELOPMENT;

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    try {
        useEffect(() => {
            const fetchProjectDetails = async () => {
                const response = await fetch(`${apiUrl}/api/v1/project/${id}`);
                const data = await response.json();
                setProject(data);
                console.log(data);
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

    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <h2>{project.name}</h2>
                <ProjectDescription contents={project.projectContents}/>
            </MainContent>
            <RightContent>
                <ProjectSideBarDetails project={project}/>
                <Tags tags={project.projectSkills}/>
            </RightContent>
        </PageWrapper>
    );
}

export default ProjectDetailsPage;