import React from 'react';
import './projectinput.css'

const ProjectInput = ({updateProjectInputName}) => {

  return (
      <div className='projectinput__container'>
          <input placeholder='Project Name' onChange={e => {updateProjectInputName(e)}}></input>
      </div>
  );
};

export default ProjectInput;
