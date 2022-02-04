import React from "react";
import './educationhistoryinput.css'

const EducationHistoryDisplay = ({ educationHistory }) => {
  let names = [];
  let gpas = []
  function processData() {
    names = [];
    gpas = []
    for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
      names.push(`${educationHistory.Education[i]?.Name}`);
    }
    for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
      gpas.push(`${educationHistory.Education[i]?.Gpa}`)
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
          </div>
        );
      })}
    </div>
  );
};

export default EducationHistoryDisplay;
