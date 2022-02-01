import React from 'react';
import {PersonalInput} from './inputs/personalinput';
import {useState} from 'react'
import { JobInput } from './inputs/jobinput';
export function Main() {
    const [name, setName] = useState('')
    const [job, setJob] = useState([])
    const updateName = e => {
        setName(e.target.value)
    }
    const updateJobTitle = e => {
        setJob(e.target.value)
    }
    return (
        <div className='container'>
            <div className='input-container'>
                <PersonalInput setName={updateName}/>
                <JobInput updateJobTitle={updateJobTitle}/>
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
            </div>
        </div>
    )
}