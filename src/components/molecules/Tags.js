import React from "react";
import Tag from "../atoms/Tag";

const Tags = ({tags}) => {
  return (
    <div className='tags'>
      {sampleData.map((tag, index) => (
        <Tag key={index} tag={tag}/>
      ))}
    </div>
  );
}

export default Tags;

const sampleData = [
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "C++",
    },
  ];