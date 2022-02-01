import React from 'react';
import {PersonalInput} from './inputs/personalinput';
import {useState} from 'react'
import { JobInput } from './inputs/jobinput';
import { JobHistoryInput } from './inputs/workhistoryinput'
export function Main() {
    const [name, setName] = useState('')
    const [job, setJob] = useState([])
    const [history, setHistory] = useState({jobs: ''})
    const [jobDisplay, setJobDisplay] = useState([])
    const updateName = e => {
        setName(e.target.value)
    }
    const updateJobTitle = e => {
        setJob(e.target.value)
    }
    const updateJobHistory = (e,index) => {
        const indexia = jobDisplay.length
        setHistory((prevState,index) => ({
            ...prevState,
            jobs: {
                ...prevState.jobs,
                [indexia]: e.target.value
            }
        }))
    }
    const onAddBtnClick = e => {
        setJobDisplay(jobDisplay.concat(<JobHistoryInput updateJobHistory={updateJobHistory} count={jobCount} key={jobDisplay.length}/>))
    }
    let jobCount = 1

    return (
        <div className='container'>
            <div className='input-container'>
                <PersonalInput setName={updateName}/>
                <JobInput updateJobTitle={updateJobTitle}/>
                {/* <JobHistoryInput updateJobHistory={updateJobHistory} count={jobCount} key={0}/> */}
                <button onClick={onAddBtnClick}>Add work experience</button>
                {jobDisplay}
            </div>
            <div className='output-container'>
                <div className='name-container'>
                    <p>Name:</p>
                    <p>{name}</p>
                </div>
                <div className='job-container'>
                    <p>Title</p>
                    <p>{job}</p>
                </div>
                <div className='job-history-container'>
                    <p>Job</p>
                    <p>{console.log(history)}</p>


                </div>
            </div>
        </div>
    )
}