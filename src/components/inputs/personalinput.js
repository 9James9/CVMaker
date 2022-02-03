import React from 'react';

export function PersonalInput({setName}) {
    return(
        <div>
            <input type="text" onChange={setName} placeholder="name"></input>
        </div>
    )
}
