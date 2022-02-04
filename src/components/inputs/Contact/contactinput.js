import React from 'react';
import './contactinput.css'
const Contactinput = ({updatePhone}) => {
  return (
    <div>
      <input type="number" placeholder='Phone Number' onChange={(e) => {updatePhone(e)}}></input>
    </div>
  );
};

export default Contactinput;
