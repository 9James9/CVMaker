import React from "react";
import { PersonalInput } from "./inputs/personalinput";
import { useState } from "react";
import { JobInput } from "./inputs/jobinput";
import { JobHistoryInput } from "./inputs/workhistoryinput";
import { WorkHistoryDisplay } from './workhistorydisplay'
import EducationInput from "./inputs/Education/educationinput";
import EducationHistoryDisplay from "./educationhistorydisplay";
export function Main() {
  const [name, setName] = useState("");
  const [job, setJob] = useState([]);
  const [history, setHistory] = useState({ jobs: "" });
  const [jobDisplay, setJobDisplay] = useState([]);
  const [educationHistory, setEducationHistory] = useState({Education:""})
  const [educationDisplay, setEducationDisplay] = useState([])
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateJobTitle = (e) => {
    setJob(e.target.value);
  };
  const updateJobHistory = (e,h) => {
    const indexia = jobDisplay.length;
    setHistory((prevState) => ({
      jobs: {
        ...prevState.jobs,
        [indexia]: {
            ...prevState.jobs[indexia],
            Company: e.target.value,
        },
      },
    }));
    console.log(history)
  };
  const updateEducationHistoryName = e => {
    let index = educationDisplay.length
    setEducationHistory((prevState) => ({

      Education: {
        ...prevState.Education,
        [index]: {
          Name: e.target.value
        }
      }

    }))
    console.log(educationHistory)
  }

  const addEducationClick = e => {
    setEducationDisplay(educationDisplay.concat(<EducationInput key={educationDisplay.length} updateEducationHistoryName={updateEducationHistoryName}/>))
  }
  const updateJobHistoryStart = e => {
      setHistory((prevState) => ({
          jobs: {
              ...prevState.jobs,
              [jobDisplay.length]: {
                  ...prevState.jobs[jobDisplay.length],
                  Start: e.target.value
              }
          }
      }))
  }

  const updateJobHistoryEnd = e => {
      setHistory((prevState) => ({
          jobs: {
              ...prevState.jobs,
              [jobDisplay.length]: {
                  ...prevState.jobs[jobDisplay.length],
                  End: e.target.value
              }
          }
      }))
  }
  const onAddBtnClick = () => {
    setJobDisplay(
      jobDisplay.concat(
        <JobHistoryInput
          updateJobHistory={updateJobHistory}
          updateJobHistoryStart={updateJobHistoryStart}
          updateJobHistoryEnd={updateJobHistoryEnd}
          key={jobDisplay.length}
        />
      )
    );
  };

  return (
    <div className="container">
      <div className="input-container">
        <PersonalInput setName={updateName} />
        <JobInput updateJobTitle={updateJobTitle} />
        <button onClick={onAddBtnClick}>Add work experience</button>
        {jobDisplay}
        <button onClick={addEducationClick}>Add Education</button>
        {educationDisplay}
      </div>
      <div className="output-container">
        <div className="name-container">
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className="job-container">
          <p>Title</p>
          <p>{job}</p>
        </div>
        <div className="job-history-container">
          <WorkHistoryDisplay history={history}/>
        </div>
        <EducationHistoryDisplay educationHistory={educationHistory}/>
      </div>
    </div>
  );
}
