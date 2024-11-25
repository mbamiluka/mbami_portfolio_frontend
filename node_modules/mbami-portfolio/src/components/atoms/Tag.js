import React from "react";
import SkillItem from "./SkillItem";

const Tag = ({tag}) => {
  return (
    <div className='tag'>
      <p>{tag.name}</p>
    </div>
  );
}

export default Tag;