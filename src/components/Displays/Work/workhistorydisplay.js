import React from "react";

export function WorkHistoryDisplay({ workHistory }) {
  let companies = [];
  let startDates = [];
  let endDates = [];
  function logCompany() {
    companies = [];
    startDates = [];
    endDates = [];
    for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
      companies.push(`${workHistory.jobs[i]?.Company}`);
    }
    for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
      startDates.push(`${workHistory.jobs[i]?.Start}`);
    }
    for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
      endDates.push(`${workHistory.jobs[i]?.End}`);
    }
  }

  return (
    <div>
      <h2>Work History</h2>
      {logCompany()}
      {companies.map((x, i) => {
        return (
          <div key={i} className="workhistory-container">
            <div className="workhistory-company">
              <p>
                {companies[i] !== "undefined"
                  ? `Worked at: ${companies[i]}`
                  : ""}
              </p>
            </div>
            <div className="workhistory-start">
              <p>
                {startDates[i] !== "undefined"
                  ? `Start Date: ${startDates[i]}`
                  : ""}
              </p>
            </div>
            <div className="workhistory-end">
              <p>
                {endDates[i] !== "undefined" ? `Ended on: ${endDates[i]}` : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
