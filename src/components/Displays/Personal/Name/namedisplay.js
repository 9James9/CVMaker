import React from 'react';
import './namedisplay.css'

const NameDisplay = ({name}) => {
  return (
      <div className='namedisplay__container'>{name ? name : 'First Last'}</div>
  );
};

export default NameDisplay;
