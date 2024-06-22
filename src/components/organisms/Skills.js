import React from "react";
import useGetProficiencies from "../../hooks/useGetProficiencies";
import SkillItem from "../atoms/SkillItem";

const Skills = () => {
    return (
        <section>
            <h1 className="Heading">Technical Skills</h1>
            <div className="skills">
                {skills.map((proficiency, index) => (
                    <SkillItem key={index} skill={proficiency} />
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