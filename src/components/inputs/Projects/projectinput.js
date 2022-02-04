import React from 'react';
import './projectinput.css'

const ProjectInput = ({updateProjectInputName, updateProjectInputDesc, updateProjectInputExtra}) => {

  return (
      <div className='projectinput__container'>
          <input placeholder='Project Name' onChange={e => {updateProjectInputName(e)}}></input>
          <input placeholder='Project Description' onChange={e => {updateProjectInputDesc(e)}}></input>
          <input placeholder='Project extra information' onChange={e => {updateProjectInputExtra(e)}}></input>
      </div>
  );
};

export default ProjectInput;
