import jsPDF from 'jspdf';
import React from 'react';

const PdfMaker = ({name,job,email,phone, github,workHistory}) => {
    let companies = [];
    let startDates = [];
    let endDates = [];
    function logCompany() {
      companies = [];
      startDates = [];
      endDates = [];
      for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
        companies.push(`${workHistory.jobs[i]?.Company}`);
      }
      for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
        startDates.push(`${workHistory.jobs[i]?.Start}`);
      }
      for (let i = 0; i < Object.keys(workHistory.jobs).length; i++) {
        endDates.push(`${workHistory.jobs[i]?.End}`);
      }
    }
    const makeDoc = e => {
        logCompany()
        let doc = new jsPDF()
        doc.setFontSize(32)
        doc.text(20,60,'Work Experience')
        for (let i = 0; i < companies.length; i++) {
            doc.setFontSize(18)
            doc.text(20,(70 + (i* 20)),`${companies[i]}`)
            doc.text(50,(80 + (i* 20)),`Start: ${startDates[i]}`)
            doc.text(90,(80 + (i* 20)),`End: ${startDates[i]}`)
        }
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
          <button onClick={makeDoc}>Save PDF</button>
      </div>
  );
};

export default PdfMaker;
