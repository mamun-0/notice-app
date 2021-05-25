import React from "react";
import "./syllabus.style.css";
import PDF_DATA from './pdfData'
class Syllabus extends React.Component {
  constructor() {
    super();
    this.state = {
      pdfInfo : PDF_DATA
    };
  }
  render() {
    return (
      <div className='syllabus__card grid grid--1x2 grid-page-padding'>
        {this.state.pdfInfo.map((item)=>(
          <div key={item.id} className='syllabus__components grid-page-padding'>
            <h2 className='syllabus__heading'>{item.title}</h2>
            <a className='btn' href={item.downloadLink}>
              {item.a_tag_title}
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default Syllabus;
