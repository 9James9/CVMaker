import React from 'react';
import './educationinput.css'
const EducationInput = ({updateEducationHistoryName}) => {
  return (
    <div>
        <input placeholder='School Name' onChange={(e) => {updateEducationHistoryName(e)}}></input>
    </div>
  )
};

export default EducationInput;
