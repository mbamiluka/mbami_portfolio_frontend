import React from "react";
import ProjectItem from "../molecules/ProjectItem";

const Projects = ({ project }) => {
    return (
        <section>
            <h1 className="Heading">Projects</h1>
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))}
            <div style={{textAlign:"center"}}>
              <a href="/project">SEE ALL</a>
            </div>
        </section>
    );
}

export default Projects;

const projects = [
    {
        id: 1,
        title: "Dandle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor, ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet.",
        role: "Fullstack Engineer",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        company: "Google",
        link: "https://www.google.com",
        logo: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        title: "Dandle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor, ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet.",
        role: "Fullstack Engineer",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        company: "Google",
        link: "https://www.google.com",
        logo: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        title: "Dandle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor, ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet.",
        role: "Fullstack Engineer",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        company: "Google",
        link: "https://www.google.com",
        logo: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        title: "Dandle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor, ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet.",
        role: "Fullstack Engineer",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        company: "Google",
        link: "https://www.google.com",
        logo: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        title: "Dandle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor, ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet.",
        role: "Fullstack Engineer",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        company: "Google",
        link: "https://www.google.com",
        logo: "https://via.placeholder.com/150",
    },
  ];

  let fullDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec purus mollis malesuada. Nullam in purus auctor";
  fullDescription += ", ultrices odio nec, tincidunt nunc. Nullam ut mi sit amet nunc aliquam imperdiet";
  fullDescription += ". Nullam ut mi sit amet nunc aliquam imperdiet. Nullam ut mi sit amet nunc aliquam imperdiet. Nullam ut mi sit amet nunc aliquam imperdiet";