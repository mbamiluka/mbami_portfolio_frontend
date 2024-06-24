import React from "react";

let defaultPic = require("../../assets/myProPic.jpg");

const SideImage = ({image}) => {
  return (
    <div>
      <img src={image || defaultPic}/>
      <div class="downloadWrapper">
          <form id = "dwnlForm" method="get" action="assets/csResumeMain.docx" target="_blank">
            <button type="submit">DOWNLOAD CV </button>
          </form>
      </div>
    </div>
    );
}

export default SideImage;