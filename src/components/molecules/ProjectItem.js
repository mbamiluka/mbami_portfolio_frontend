import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };
  return (
    <div className='workContainer'onClick={handleClick}>
        <h3>{project.title}</h3>
        <div className="threeColGrid">
            <img src={project.image} 
                alt='project logo'
            />
            <p>{project.description}</p>
            <p className='projectLinks'></p>
        </div>
    </div>
  );
}

export default ProjectItem;