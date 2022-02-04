import React from "react";
import "./projectdisplay.css";

const ProjectDisplay = ({ projects }) => {
  let projectNames = [];
  let projectDescriptions = [];
  let projectExtras = [];
  const handleData = () => {
    projectNames = [];
    projectDescriptions = [];
    projectExtras = [];
    for (let i = 0; i < Object.keys(projects.projects).length; i++) {
      projectNames.push(projects.projects[i]?.Name);
    }
    for (let i = 0; i < Object.keys(projects.projects).length; i++) {
      projectDescriptions.push(projects.projects[i]?.Description);
    }
    for (let i = 0; i < Object.keys(projects.projects).length; i++) {
      projectExtras.push(projects.projects[i]?.Extra);
    }
  };
  return (
    <div className="projectdisplay__container">
      {handleData()}
      <h3>
        {projectNames[0] &&
        projectNames[0] !== "undefined" &&
        projectNames[0] !== ''
          ? "Projects"
          : ''}
      </h3>
      {projectNames.map((x, i) => {
        return (
          <div key={i}>
            <p>
              {projectNames[i] !== '' && projectNames[i] !== 'undefined'
                ? `Name: ${projectNames[i]}`
                : ''}
            </p>
            {}
            <p>{projectDescriptions[i] !== '' && projectDescriptions[i] !== 'undefined' ? `Description: ${projectDescriptions[i]}` : ''}</p>
            <p>{projectExtras[i] !== '' && projectExtras[i] !== 'undefined' ? `More info: ${projectExtras[i]}` : ''}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
