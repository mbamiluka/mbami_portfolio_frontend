import React from "react";
import Tag from "../atoms/Tag";

const Tags = ({tags, start, end}) => {
  return (
    <div className='tags'>
      {sampleData.slice(start, end).map((tag, index) => (
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
    {
      id: 25,
      name: "Flutter",
  },
  {
      id: 26,
      name: "React Native",
  },
  {
      id: 27,
      name: "Ionic",
  },
  {
      id: 28,
      name: "Xamarin",
  },
  {
      id: 29,
      name: "Docker",
  },
  {
      id: 30,
      name: "Kubernetes",
  }
  ];