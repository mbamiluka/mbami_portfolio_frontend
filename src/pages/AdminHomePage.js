import React from "react";
import PageWrapper from "../components/organisms/PageWrapper";
import LeftContent from "../components/organisms/LeftContent";
import RightContent from "../components/organisms/RightContent";
import MainContent from "../components/organisms/MainContent";
import Tags from "../components/molecules/Tags";
import AddSkill from "../components/molecules/AddSkill";
import AddExpType from "../components/molecules/AddExpType";
import AddProject from "../components/molecules/AddProject";
import AddExpRole from "../components/molecules/AddExpRole";
import AddSkillCategory from "../components/molecules/AddSkillCategory";
import Loading from "../components/atoms/Loading";
import ProjectDetails from "../components/molecules/ProjectDetails";
import AddExperience from "../components/molecules/AddExperience";
import AddAchievement from "../components/molecules/AddAchievement";


const AdminHomePage = () => {
    return (
        <PageWrapper>
            <LeftContent/>
            <MainContent>
                <h2>Admin</h2>
                <AddSkillCategory/>
                <AddSkill/>
                <AddExpType/>
                <AddExperience/>
                <AddExpRole/>
                <AddProject/>
                <AddAchievement/>
            </MainContent>
            <RightContent>
                <Tags tags={["Admin", "Home", "Page"]}/>
            </RightContent>
        </PageWrapper>
    );
}

export default AdminHomePage;