import React from 'react';
import './githubdisplay.css'
const GithubDisplay = ({github}) => {
  return (
      <div>
          {github ? github : ''}
      </div>
  );
};

export default GithubDisplay;
