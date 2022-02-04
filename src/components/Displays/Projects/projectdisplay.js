import React from 'react';
import './projectdisplay.css'

const ProjectDisplay = ({projects}) => {
    let projectNames = []
    const handleData = () => {
        for (let i = 0; i < Object.keys(projects.projects).length; i++) {
            projectNames.push(projects.projects[i]?.Name)
        }
        
    }
  return (
      <div className='projectdisplay__container'>
          {handleData()}
          <h3>{projectNames.length > 0 ? 'Projects' : ''}</h3>
          {projectNames.map((x,i) => {
              return (
                  <p key={i}>{projectNames[i] !== '' && projectNames[i] !== 'undefined' ? `${projectNames[i]}` : ''}</p>
              )
          })}
      </div>
  );
};

export default ProjectDisplay;
