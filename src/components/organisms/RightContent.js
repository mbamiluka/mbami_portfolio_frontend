import React from "react";
import dwnIcon from "../../assets/dwnl_icon.svg";

const RightContent = () => {
  return (
    <div className="RightContent">
      <img className="profPic"
        src="https://csportfolio.web.app/assets/myProPic.jpg" alt="profile picture" />
      <div class="downloadWrapper">
        <form id = "dwnlForm" method="get" action="assets/csResumeMain.docx" target="_blank">
            <button type="submit">DOWNLOAD CV <img src={dwnIcon} /></button>
          </form>
    </div>
    </div>
  );
};

export default RightContent;