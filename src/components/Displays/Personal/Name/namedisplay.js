import React from 'react';
import './namedisplay.css'

const NameDisplay = ({name}) => {
  return (
      <div>{name ? name : 'First Last'}</div>
  );
};

export default NameDisplay;
