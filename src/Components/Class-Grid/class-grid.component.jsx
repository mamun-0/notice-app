import React from "react";
import "../Grid-CSS/grid-css.style.css";
import SCHEDULE_DATA from "./classScheduleData";
import ClassSchedule from "../Cls-schedule/cls-schedule.component";
class ClassGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      classInformation: SCHEDULE_DATA,
    };
  }
  render() {
    return (
      <div className='grid grid--1x2 grid--1x4 grid-page-padding'>
        <ClassSchedule classInformation={this.state.classInformation} />
      </div>
    );
  }
}
export default ClassGrid;
