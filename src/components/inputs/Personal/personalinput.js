import React from 'react';
import './personalinput.css';

export function PersonalInput({setName}) {
    return(
        <div>
            <input type="text" onChange={setName} placeholder="name"></input>
        </div>
    )
}
