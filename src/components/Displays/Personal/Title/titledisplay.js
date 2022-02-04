import React from 'react';
import './titledisplay.css'

const TitleDisplay = ({title}) => {
  return (
      <div>{title ? title : 'Title'}</div>
  );
};

export default TitleDisplay;