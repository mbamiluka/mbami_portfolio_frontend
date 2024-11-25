import React, { useState, useEffect } from "react";
import useGetProficiencies from "../../hooks/useGetSkills";
import SkillItem from "../atoms/SkillItem";
import useGetSkills from "../../hooks/useGetSkills";

const Skills = () => {
    const { skills, isLoading, error } = useGetSkills();
    console.log(skills);
    return (
        <section>
            <h1 className="Heading">Technical Skills</h1>
            <div className="skills">
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;

//test data
const skills = [
    {
        name: "JavaScript",
        yoe: 3,
    },
    {
        name: "React",
        yoe: 2,
    },
    {
        name: "Python",
        yoe: 1,
    },
    {
        name: "Java",
        yoe: 2,
    },
    {
        name: "C++",
        yoe: 1,
    },
];