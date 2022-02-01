import React from 'react';

export function JobHistoryInput ({updateJobHistory}) {
        return(
            <input type="text" placeholder='Company Name' onChange={(e) => {updateJobHistory(e)}}/>
        )
}
