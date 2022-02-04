import React from "react";
import "./main.css";
import { PersonalInput } from "../Inputs/Personal/personalinput";
import { useState } from "react";
import { JobInput } from "../Inputs/Work/jobinput";
import { JobHistoryInput } from "../Inputs/Work/workhistoryinput";
import { WorkHistoryDisplay } from "../Displays/Work/workhistorydisplay";
import EducationInput from "../Inputs/Education/educationinput";
import EducationHistoryDisplay from "../Displays/Education/educationhistorydisplay";
import NameDisplay from "../Displays/Personal/Name/namedisplay";
import TitleDisplay from "../Displays/Personal/Title/titledisplay";
import ContactDisplay from "../Displays/Contact/contactdisplay";
import Contactinput from "../Inputs/Contact/contactinput";
import SkillsInput from "../Inputs/Personal/Skills/skillsinput";
import SkillsDisplay from "../Displays/Personal/Skills/skillsdisplay";
export function Main() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [workHistory, setHistory] = useState({ jobs: "" });
  const [jobDisplay, setJobDisplay] = useState([]);
  const [educationHistory, setEducationHistory] = useState({ Education: "" });
  const [educationDisplay, setEducationDisplay] = useState([]);
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState('')
  const [skills, setSkills] = useState({ skills: ""})
  const [skillsInputs, setSkillsInputs] = useState([])
  
  const updateSkill = e => {
    setSkills((prevState) => ({
      skills: {
        ...prevState.skills,
        [skillsInputs.length]: {
          skill: e.target.value
        }
      }
    }))
    console.log(skills)
  }

  const addSkillsInput = e => {
    setSkillsInputs(skillsInputs.concat(<SkillsInput key={skillsInputs.length} updateSkill={updateSkill}/>))
  }

  
  const updateEmail = e => {
    setEmail(e.target.value)
  }
  const updatePhone = e => {
    setPhone(e.target.value)
  }
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
        <Contactinput updatePhone={updatePhone} updateEmail={updateEmail}/>
        <JobInput updateJobTitle={updateJobTitle} />
        <button onClick={onAddBtnClick}>Add work experience</button>
        <button onClick={removeWorkClick}>Delete work experience</button>
        {jobDisplay}
        <button onClick={addEducationClick}>Add Education</button>
        <button onClick={removeEducationClick}>Delete education</button>
        {educationDisplay}
        <button onClick={addSkillsInput}>Add skill</button>
        {skillsInputs}
      </div>

      <div className="output-container">
        <NameDisplay name={name} />
        <TitleDisplay title={job} />
        <ContactDisplay phone={phone} email={email}/>
        <div className="job-workHistory-container">
          <WorkHistoryDisplay workHistory={workHistory} />
        </div>
        <EducationHistoryDisplay educationHistory={educationHistory} />
        <SkillsDisplay/>
      </div>
    </div>
  );
}
