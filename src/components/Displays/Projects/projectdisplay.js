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
      if (projects.projects[i]?.Name === undefined) {
          projectNames[i] = ''
      } else {
        projectNames[i] = (projects.projects[i]?.Name);
      }
    }
    for (let i = 0; i < Object.keys(projects.projects).length; i++) {
      if (projects.projects[i]?.Description === undefined) {
        projectDescriptions[i] = ('')
    } else {
      projectDescriptions[i] = (projects.projects[i]?.Description);
    }
    }
    for (let i = 0; i < Object.keys(projects.projects).length; i++) {
      if (projects.projects[i]?.Extra === undefined) {
        projectExtras[i] = ('')
    } else {
      projectExtras[i] = (projects.projects[i]?.Extra);
    }
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
            <p>{projectDescriptions[i] !== '' && projectDescriptions[i] !== 'undefined' ? `Description: ${projectDescriptions[i]}` : ''}</p>
            <p>{projectExtras[i] !== '' && projectExtras[i] !== 'undefined' ? `More info: ${projectExtras[i]}` : ''}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
