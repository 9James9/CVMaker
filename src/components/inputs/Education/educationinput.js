import React from 'react';
import './educationinput.css'
const EducationInput = ({updateEducationHistoryName, updateEducationHistoryGpa}) => {
  return (
    <div>
        <input placeholder='School Name' onChange={(e) => {updateEducationHistoryName(e)}}></input>
        <input placeholder='GPA -optional' onChange={e => {updateEducationHistoryGpa(e)}}></input>
    </div>
  )
};

export default EducationInput;
