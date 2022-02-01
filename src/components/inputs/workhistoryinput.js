import React from 'react';

export function JobHistoryInput ({updateJobHistory,updateJobHistoryStart}) {
        return(
            <div>
            <input type="text" placeholder='Company Name' onChange={(e) => {updateJobHistory(e)}}/>
            <input type="number" placeholder='Start Date' onChange={((e) => {updateJobHistoryStart(e)})}/>
            </div>

        )
}
