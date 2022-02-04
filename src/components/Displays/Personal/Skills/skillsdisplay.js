import React from 'react';
import './skillsdisplay.css'

const SkillsDisplay = ({skills}) => {
  let skillArray = []
  const handleData = () => {
    skillArray = []
    for (let i = 0; i < Object.keys(skills.skills).length; i++) {
      skillArray.push(`${skills.skills[i]?.skill}`)
    }
  }
  return (
      <div>
          <h3>Skills:</h3>
          {handleData()}
          {skillArray.map((x,i) => {
            return x !== 'undefined' ? <p key={i}>{x}</p> : ''
          })}
      </div>
  );
};

export default SkillsDisplay;
