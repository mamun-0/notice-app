import React from "react";
import "./cls-schedule.style.css";
const ClassSchedule = (props) => (
    props.classInformation.map((item)=>(
      <div className='schedule-card crd-clr'>
      <h2>CSE {item.subjectCode}</h2>
      <ul className='list'>
        <li className='list__item'>
          Teacher Name : <span>{item.teacherName}</span>
        </li>
        <li className='list__item'>
          Subject Name : <span>{item.subjectName}</span>
        </li>
        <li className='list__item'>
          Class Time : <span>{item.classStartTime}</span>
        </li>
      </ul>
    </div>
    ))
)
export default ClassSchedule;
