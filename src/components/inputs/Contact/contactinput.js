import React from 'react';
import './contactinput.css'
const Contactinput = ({updatePhone, updateEmail}) => {
  return (
    <div className='contactinput__container'>
      <input type="number" placeholder='Phone Number' onChange={(e) => {updatePhone(e)}}></input>
      <input type="email" placeholder='Email address' onChange={e => {updateEmail(e)}}></input>
    </div>
  );
};

export default Contactinput;
