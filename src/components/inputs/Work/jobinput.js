import React from 'react';

export function JobInput({updateJobTitle}) {
    return(
        <div>
            <input placeholder='Job title' onChange={updateJobTitle}></input>
        </div>
    )
}