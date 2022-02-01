import React from "react";

export function WorkHistoryDisplay({ history }) {
    let companies = []
    let startDates = []
    let endDates = []
    function logCompany() {

            for (let i = 0; i < Object.keys(history.jobs).length; i++) {
                console.log(history.jobs[i].Company)
                    companies.push(`Worked at ${history.jobs[i].Company}`)
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
      <h2>Hello Workhistorydisplay</h2>
      <button onClick={logCompany}>Click me</button>
      {logCompany()}
      {companies.map((i,x) => {
          return (<div key={x}>{i}{`Start Date: ${startDates[x]}`}{`End Date: ${endDates[x]}`}
          </div>)
      })}
    </div>
  );
}
