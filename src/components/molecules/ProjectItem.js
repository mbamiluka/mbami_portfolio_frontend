import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className='workContainer'>
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