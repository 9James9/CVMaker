import React from 'react';
import './educationinput.css'
const EducationInput = ({updateEducationHistoryName, updateEducationHistoryGpa, updateEducationHistoryMajor}) => {
  return (
    <div className='educationinput__container'>
        <input placeholder='School Name' onChange={(e) => {updateEducationHistoryName(e)}}></input>
        <input placeholder='GPA -optional' onChange={e => {updateEducationHistoryGpa(e)}}></input>
        <input placeholder='Major-optional' onChange={e => {updateEducationHistoryMajor(e)}}></input>
    </div>
  )
};

export default EducationInput;
