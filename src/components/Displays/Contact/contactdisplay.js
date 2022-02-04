import React from "react";
import "./contactdisplay.css";
const ContactDisplay = ({ phone, email }) => {
  return (
    <div className="contactdisplay__container">
      <div className="contactdisplay__phone">
        {phone ? phone : "555-555-6969"}
      </div>
      <div className="contactdisplay__email">
        {email ? email : "example@example.com"}
      </div>
    </div>
  );
};

export default ContactDisplay;
