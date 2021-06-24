import React from "react";
import "./assignmentflex.style.css";
const AssignmentFlex = (props) => (
  <div className='grid grid--1x2 grid--1x3 grid-page-padding'>
    {props.assignment.map((item) => (
      <div key={item.id} className='schedule-card crd-clr'>
        <h2>CSE {item.subjectCode}</h2>
        <ul className='list'>
          <li className='list__item'>
            Teacher Name : <span>{item.teacherName}</span>
          </li>
          <li className='list__item'>
            Subject Name : <span>{item.subjectName}</span>
          </li>
        </ul>
            <a className='btn' href={item.downloadLink}>Download</a>
      </div>
    ))}
  </div>
);
export default AssignmentFlex;
