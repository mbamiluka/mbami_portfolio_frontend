import React from 'react';

const ProjectDescription = ({ contents }) => {
    return (
        <div>
            {contents.map((contentObj, index) => {
                switch (contentObj.contentType) {
                    case 'Text':
                        return <p key={index}>{contentObj.content}</p>;
                    case 'image':
                        return <img key={index} src={contentObj.content} alt={contentObj.alt}/>;
                    case 'video':
                        return <video key={index} src={contentObj.content} controls/>;
                    case 'link':
                        return <a key={index} href={contentObj.content}>{contentObj.text}</a>;
                    case 'code':
                        return <pre key={index}>{contentObj.content}</pre>;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ProjectDescription;