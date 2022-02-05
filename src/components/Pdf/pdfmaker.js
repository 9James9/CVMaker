import jsPDF from 'jspdf';
import React from 'react';

const PdfMaker = () => {
    const makeDoc = e => {
        let doc = new jsPDF()
        doc.text(20, 20, 'Hello World')
        doc.save('Helloworld.pdf')
    }
  return (
      <div>
          <h2>Hello JSPDF</h2>
          <button onClick={makeDoc}>Save PDF</button>
      </div>
  );
};

export default PdfMaker;
