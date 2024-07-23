import React from "react";
import ExperienceItem from "../molecules/ExperienceItem";
import useGetExperiences from "../../hooks/useGetExperience";
import Loading from "../atoms/Loading";

const EducationExperiences = ({ experience }) => {
    const { experiences, loading, error } = useGetExperiences("education");

    if(loading) return <Loading />
    if(error) return <div>Error...</div>
    return (
        <section>
            <h1 className="Heading">Education</h1>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </section>
    );
}

export default EducationExperiences;

//test data (list of schools attended)
const experiences = [
    {
        start: "2024",
        end: "2026",
        company: "KSU",
        role: "Graduate Student",
        achievements: "Masters Degree in SWE",
        logo: "https://csportfolio.web.app/assets/ksuLogo.png",
    },
    {
        start: "2016",
        end: "2018",
        company: "School B",
        role: "Student",
        achievements: "Achievement 1, Achievement 2, Achievement 3, kkkkk kkkk kkkk kkkk k"
    }
];

