import React from 'react';
import './titledisplay.css'

const TitleDisplay = ({title}) => {
  return (
      <div className='titledisplay__container'>{title ? title : 'Title'}</div>
  );
};

export default TitleDisplay;