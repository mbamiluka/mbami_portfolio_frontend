import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tags from "../molecules/Tags";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };
  return (
    <div className='workContainer'onClick={handleClick}>
        <h3>{project.name}</h3>
        <div className="threeColGrid">
            <img src={project.image || "https://via.placeholder.com/150"} 
                alt='project logo'/>
            <p>{project.description}</p>
            <p className='projectLinks'></p>
        </div>
        {/* <Tags tags={sampleTags} start={0}  end={8}/> */}
    </div>
  );
}

export default ProjectItem;

const sampleTags = [
    {
        id: 1,
        name: "React",
    }
];