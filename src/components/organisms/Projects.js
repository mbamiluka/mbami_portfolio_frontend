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
              <a href="pages/works.html">SEE ALL</a>
            </div>
        </section>
    );
}

export default Projects;

const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      logo: "https://via.placeholder.com/150",
      descr: "A personal portfolio website to showcase my work and skills.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "http://example.com/portfolio"
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/150",
      title: "E-commerce Platform",
      descr: "An e-commerce platform built for a local retailer to sell products online.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      link: "http://example.com/ecommerce"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      logo: "https://via.placeholder.com/150",
      descr: "A dashboard to track social media metrics and performance.",
      technologies: ["Python", "Flask", "SQL", "React"],
      link: "http://example.com/dashboard"
    }
];