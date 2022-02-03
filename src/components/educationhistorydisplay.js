import React from 'react';

const EducationHistoryDisplay = ({educationHistory}) => {
    let names = []
    function processData() {
        names = []
        for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
            names.push(educationHistory.Education[i].Name)
            console.log(educationHistory.Education[i].Name)
        }
    }
  return (
  <div>
      <h2>Education:</h2>
        {processData()}
        {names.map((x,i) => {
            return(
                <div key={i} className='educationhistory-display'>
                    <p>{names[i] == 'undefined' ? '' : `School:  ${names[i]}`}</p>
                </div>
            )
        })}

            
    
  </div>
  )
};

export default EducationHistoryDisplay;
