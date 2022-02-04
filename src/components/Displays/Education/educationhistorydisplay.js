import React from "react";
import EducationInput from "../../Inputs/Education/educationinput";
import './educationhistoryinput.css'

const EducationHistoryDisplay = ({ educationHistory }) => {
  let names = [];
  let gpas = [];
  let majors = [];
  function processData() {
    names = [];
    gpas = [];
    majors = [];
    for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
      names.push(`${educationHistory.Education[i]?.Name}`);
    }
    for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
      gpas.push(`${educationHistory.Education[i]?.Gpa}`)
    }
    for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
      majors.push(`${educationHistory.Education[i]?.Major}`)
    }
  }
  return (
    <div>
      <h2>Education:</h2>
      {processData()}
      {names.map((x, i) => {
        return (
          <div key={i} className="educationhistory-display">
            <p>{names[i] !== "undefined" && names[i] !== '' ? `Studied at: ${names[i]}` : ""}</p>
            <p>{gpas[i] !== 'undefined' && gpas[i] !== '' ? `GPA: ${gpas[i]}` : ''}</p>
            <p>{majors[i] !== 'undefined' && majors[i] !== '' ? `Major: ${majors[i]}` : ''}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationHistoryDisplay;
