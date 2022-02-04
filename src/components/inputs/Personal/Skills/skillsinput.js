import React from 'react';
import './skillsinput.css'

const SkillsInput = ({updateSkill}) => {
  return (
      <div className='skillsinput__container'>
          <input placeholder='Skill' onChange={updateSkill}></input>
      </div>
  );
};

export default SkillsInput;
