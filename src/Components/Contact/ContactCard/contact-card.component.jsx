import React from "react";
import "./contact-card.style.css";
import STUDENTS from "../data/data.js";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      stdn: STUDENTS,
    };
  }
  render() {
    return (
      <div class='student-card'>
        {this.state.stdn.map((student) => (
          <div key={student.id} class='info-card'>
          <div class='heading-card'>
            <h3>{`ID : `}{student.id}</h3>
          </div>
          <div class='details-card'>
            <ul>
              <li>{`Name : `}{student.name}</li>
              <li>{`Mobile : `}{student.mobile}</li>
              <li>{`Email : `}{student.email}</li>
              <li>{`District : `}{student.district}</li>
            </ul>
          </div>
        </div>
        ))}
        
      </div>
    );
  }
}
export default Contact;