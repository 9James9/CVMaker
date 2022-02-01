import React from 'react';

export function JobHistoryInput ({updateJobHistory,calcIndex,count,key}) {
        return(
            <input type="text" key={key} placeholder='Company Name' onChange={(e,index) => {updateJobHistory(e,count)}}/>
        )
}
