import React from "react";

const LiveLink = ({link}) => {
  return (
    <a href={link} target="_blank" 
        rel="noreferrer"
        className="liveDemoLink">
        Live Demo
        <div class="blinker"></div>
    </a>
    );
}

export default LiveLink;