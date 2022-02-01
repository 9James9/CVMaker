import React from 'react';

export function JobHistoryInput ({updateJobHistory,calcIndex,count}) {
        return(
            <input type="text" placeholder='Company Name' onChange={(e) => {updateJobHistory(e,count)}}/>
        )
}
