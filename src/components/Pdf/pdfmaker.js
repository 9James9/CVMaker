import jsPDF from 'jspdf';
import React from 'react';

const PdfMaker = ({name,job,email,phone, github,workHistory, educationHistory}) => {
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
    let names = [];
    let gpas = [];
    let majors = [];
    function processData() {
      names = [];
      gpas = [];
      majors = [];
      for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
        names.push(`${educationHistory.Education[i]?.Name}`);
      }
      for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
        gpas.push(`${educationHistory.Education[i]?.Gpa}`)
      }
      for (let i = 0; i < Object.keys(educationHistory.Education).length; i++) {
        majors.push(`${educationHistory.Education[i]?.Major}`)
      }
    }
    const makeDoc = e => {
        logCompany()
        processData()
        let doc = new jsPDF()
        
        doc.setFontSize(48)
        doc.text(20, 20, `${name}`)
        doc.setFontSize(18)

        doc.text(20,40,`${email}`)
        doc.text(20,30,`${job}`)
        doc.text(20,50, `${phone}`)
        doc.text(120,30, `github.com/${github}`)
        // work history
        doc.setFontSize(32)
        doc.text(20,60,'Work History')
        for (let i = 0; i < companies.length; i++) {
            doc.setFontSize(18)
            doc.text(20,(70 + (i* 20)),`${companies[i]}`)
            doc.text(50,(80 + (i* 20)),`Start: ${startDates[i]}`)
            doc.text(90,(80 + (i* 20)),`End: ${startDates[i]}`)
        }
        // education history
        doc.setFontSize(32)
        let companyEnd = (companies.length * 20) + 90
        doc.text(20, (companyEnd), 'Education')
        for (let i = 0; i < names.length; i++) {
            doc.setFontSize(24)
            doc.text(20,companyEnd + (i * 40 || 10), `${names[i]}`)
            doc.setFontSize(18)
            doc.text(60, companyEnd + 10 + (i * 40 || 10), `GPA: ${gpas[i]}`)
            doc.text(90, companyEnd + 10 + (i * 40 || 10), `Major: ${majors[i]}`)
        }


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
