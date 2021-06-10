import React from "react";
import "./syllabus.style.css";
import { SearchBox } from "../../Components/Search-Box/search-box.component";
import PDF_DATA from "./pdfData";
class Syllabus extends React.Component {
  constructor() {
    super();
    this.state = {
      pdfInfo: PDF_DATA,
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { pdfInfo, searchField } = this.state;
    const filterPdf = pdfInfo.filter((pdf) =>
      pdf.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <React.Fragment>
        <div className='search-box'>
          <SearchBox
            placeholder='type subject code or file name..'
            handleChange={this.handleChange}
          />
        </div>
        <div className='syllabus__card grid grid--1x2 grid-page-padding'>
          {filterPdf.map((item) => (
            <div
              key={item.id}
              className='syllabus__components grid-page-padding'>
              <h2 className='syllabus__heading'>{item.title}</h2>
              <a className='btn' href={item.downloadLink}>
                {item.a_tag_title}
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Syllabus;
