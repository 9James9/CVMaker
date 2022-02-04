import React from 'react';
import './jobinput.css'
export function JobInput({updateJobTitle}) {
    return(
        <div>
            <input placeholder='Job title' onChange={updateJobTitle}></input>
        </div>
    )
}