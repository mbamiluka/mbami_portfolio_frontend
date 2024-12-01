import React, { useState, useEffect } from "react";
import useGetProficiencies from "../../hooks/useGetSkills";
import SkillItem from "../atoms/SkillItem";
import useGetSkills from "../../hooks/useGetSkills";

const Skills = () => {
    const { skills, isLoading, error } = useGetSkills();
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