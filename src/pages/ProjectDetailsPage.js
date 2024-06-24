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

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    try {
        useEffect(() => {
            const fetchProjectDetails = async () => {
                const response = await fetch(`/api/project/${projectId}`); // Adjust the URL as needed
                const data = await response.json();
                setProject(data);
            };
    
            fetchProjectDetails();
        }, [projectId]);
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
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </MainContent>
            <RightContent>
                <ProjectSideBarDetails project={project}/>
                <Tags tags={project.skills}/>
            </RightContent>
        </PageWrapper>
    );
}

export default ProjectDetailsPage;

let description = "Lorem ipsum dolor sit amet, consectetur" 
description += "adipiscing elit. Sed ut urna nec purus"
description += "mollis malesuada. Nullam in purus auctor, "
description += "ultrices odio nec, tincidunt nunc. Nullam "
description += "ut mi sit amet nunc aliquam imperdiet. "

const sampleProject = {
    id: 1,
    title: "Dandle",
    description: description,
    role: "Fullstack Engineer",
    company: "Self",
    skills: ["React", "JavaScript", "java", "Responsive Design",
        "HTML", "CSS", "MySQL", "Normalization" ]
}