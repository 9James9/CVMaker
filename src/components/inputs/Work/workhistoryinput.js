import React from 'react';
import './workhistoryinput.css'
export function JobHistoryInput ({updateJobHistory,updateJobHistoryStart,updateJobHistoryEnd}) {
        return(
            <div>
            <input type="text" placeholder='Company Name' onChange={(e) => {updateJobHistory(e)}}/>
            <input type="number" placeholder='Start Date' onChange={((e) => {updateJobHistoryStart(e)})}/>
            <input type="number" placeholder="End Date" onChange={((e) => {updateJobHistoryEnd(e)})}/>
            </div>

        )
}
