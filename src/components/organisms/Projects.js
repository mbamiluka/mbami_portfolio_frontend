import React, { useState, useEffect } from "react";
import ProjectItem from "../molecules/ProjectItem";
import Loading from "../atoms/Loading";
import API_ENDPOINTS from "../../config/api";

const api = process.env.REACT_APP_MBAMI_PORTFOLIO_BACKEND_URL;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(API_ENDPOINTS.PROJECT);
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);
  
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