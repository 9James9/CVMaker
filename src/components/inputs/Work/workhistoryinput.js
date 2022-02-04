import React from 'react';
import './workhistoryinput.css'
export function JobHistoryInput ({updateJobHistory,updateJobHistoryStart,updateJobHistoryEnd}) {
        return(
            <div className='workhistoryinput__container'>
            <input type="text" placeholder='Company Name' onChange={(e) => {updateJobHistory(e)}}/>
            <input type="text" placeholder='Start Date' onChange={((e) => {updateJobHistoryStart(e)})}/>
            <input type="text" placeholder="End Date" onChange={((e) => {updateJobHistoryEnd(e)})}/>
            </div>

        )
}
