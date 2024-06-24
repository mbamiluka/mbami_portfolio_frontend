import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${project.id}`, { state: { activeProject: project } });
  };
  return (
    <div className='workContainer'onClick={handleClick}>
        <h3>{project.title}</h3>
        <div className="threeColGrid">
            <img src={project.logo} 
                alt='project logo'
            />
            <p>{project.descr}</p>
            <p className='projectLinks'>hh</p>
        </div>
    </div>
  );
}

export default ProjectItem;