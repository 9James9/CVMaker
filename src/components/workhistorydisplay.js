import React from "react";

export function WorkHistoryDisplay({ history }) {
    let companies = []
    let startDates = []
    let endDates = []
    function logCompany() {

            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                console.log(history.jobs[i].Company)
                    companies.push(`${history.jobs[i].Company}`)
            }
            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                startDates.push(`${history.jobs[i].Start}`)
            }
            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                endDates.push(`${history.jobs[i].End}`)
            }
    }

  return (
    <div>
      <h2>Work History</h2>
      {logCompany()}
      {companies.map((i,x) => {
          return (
              <div key={x} className="workhistory-container">
                  <div className="workhistory-company">
                      <p>Worked at {companies[x]}</p>
                  </div>
                  <div className="workhistory-start">
                      <p>Start: {startDates[x]}</p>
                  </div>
                  <div className="workhistory-end">
                      <p>End: {endDates[x]}</p>
                  </div>
              </div>
          )
      })}
    </div>
  );
}
