import React, {Component} from 'react';
import {PersonalInput} from './personalinput';
import {useState} from 'react'
export function Main() {
    const [name, setName] = useState('')
    const updateName = e => {
        setName(e.target.value)
    }
    return (
        <div className='container'>
            <div className='input-container'>
                <PersonalInput setName={updateName}/>
            </div>
            <div className='output-container'>
                <div className='name-container'>
                    <p>Name:</p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}