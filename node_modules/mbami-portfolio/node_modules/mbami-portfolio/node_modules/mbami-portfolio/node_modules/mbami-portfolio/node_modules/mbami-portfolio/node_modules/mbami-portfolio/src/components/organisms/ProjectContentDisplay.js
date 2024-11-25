import React from "react";
import DOMPurify from "dompurify";

const ProjectContentDisplay = ({ content }) => {
    const sanitizedContent = DOMPurify.sanitize(content.content);

    return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    );
};
//

export default ProjectContentDisplay;