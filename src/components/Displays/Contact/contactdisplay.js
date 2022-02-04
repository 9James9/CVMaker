import React from 'react';
import './contactdisplay.css'
const ContactDisplay = ({phone}) => {
  return (
    <div>
      {phone ? phone : '555-555-6969'}
    </div>
  );
};

export default ContactDisplay;