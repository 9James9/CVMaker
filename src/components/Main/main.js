import React from "react";
import { PersonalInput } from "../inputs/Personal/personalinput";
import { useState } from "react";
import { JobInput } from "../inputs/Work/jobinput";
import { JobHistoryInput } from "../inputs/Work/workhistoryinput";
import { WorkHistoryDisplay } from "../Displays/Work/workhistorydisplay";
import EducationInput from "../inputs/Education/educationinput";
import EducationHistoryDisplay from "../Displays/Education/educationhistorydisplay";
export function Main() {
  const [name, setName] = useState("");
  const [job, setJob] = useState([]);
  const [workHistory, setHistory] = useState({ jobs: "" });
  const [jobDisplay, setJobDisplay] = useState([]);
  const [educationHistory, setEducationHistory] = useState({ Education: "" });
  const [educationDisplay, setEducationDisplay] = useState([]);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateJobTitle = (e) => {
    setJob(e.target.value);
  };
  const updateJobHistory = (e, h) => {
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
    console.log(workHistory);
  };
  const updateEducationHistoryName = (e) => {
    let index = educationDisplay.length;
    setEducationHistory((prevState) => ({
      Education: {
        ...prevState.Education,
        [index]: {
          Name: e.target.value,
        },
      },
    }));
    console.log(educationHistory);
  };
  const uniqueKey = () => {
    return new Date().getTime().toString();
  };
  const addEducationClick = (e) => {
    setEducationDisplay(
      educationDisplay.concat(
        <EducationInput
          key={uniqueKey()}
          updateEducationHistoryName={updateEducationHistoryName}
        />
      )
    );
  };

  const removeEducationClick = (e) => {
    setEducationDisplay(educationDisplay.slice(0, -1));
    setEducationHistory((prevState) => ({
      Education: {
        ...prevState.Education,
        [educationDisplay.length - 1]: {
          Name: "undefined",
        },
      },
    }));
  };

  const removeWorkClick = (e) => {
    setJobDisplay(jobDisplay.slice(0, -1));
    setHistory((prevState) => ({
      jobs: {
        ...prevState.jobs,
        [jobDisplay.length - 1]: {
          Company: "undefined",
          Start: "undefined",
          End: "undefined",
        },
      },
    }));
  };
  const updateJobHistoryStart = (e) => {
    setHistory((prevState) => ({
      jobs: {
        ...prevState.jobs,
        [jobDisplay.length]: {
          ...prevState.jobs[jobDisplay.length],
          Start: e.target.value,
        },
      },
    }));
  };

  const updateJobHistoryEnd = (e) => {
    setHistory((prevState) => ({
      jobs: {
        ...prevState.jobs,
        [jobDisplay.length]: {
          ...prevState.jobs[jobDisplay.length],
          End: e.target.value,
        },
      },
    }));
  };
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
        <button onClick={removeWorkClick}>Delete work experience</button>
        {jobDisplay}
        <button onClick={addEducationClick}>Add Education</button>
        <button onClick={removeEducationClick}>Delete education</button>
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
        <div className="job-workHistory-container">
          <WorkHistoryDisplay workHistory={workHistory} />
        </div>
        <EducationHistoryDisplay educationHistory={educationHistory} />
      </div>
    </div>
  );
}