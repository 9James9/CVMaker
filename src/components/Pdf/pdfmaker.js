import jsPDF from 'jspdf';
import React from 'react';

const PdfMaker = ({name,job,email,phone, github}) => {
    const saveState = () => {
        
    }
    const makeDoc = e => {
        let doc = new jsPDF()
        doc.setFontSize(48)
        doc.text(20, 20, `${name}`)
        doc.setFontSize(18)

        doc.text(20,40,`${email}`)
        doc.text(20,30,`${job}`)
        doc.text(20,50, `${phone}`)
        doc.text(120,30, `github.com/${github}`)

        doc.save(`deletethis69.pdf`)
    }
  return (
      <div>
          <h2>Hello JSPDF</h2>
          <button onClick={saveState}>Submit</button>
          <button onClick={makeDoc}>Save PDF</button>
      </div>
  );
};

export default PdfMaker;
