import React from "react";
import AssignmentFlex from "../../../AssignmentFlex/assignmentflex.component";
import ASSIGNMENT_21 from "./data";
class Assignment21 extends React.Component {
  constructor() {
    super();
    this.state = {
      assignment21: ASSIGNMENT_21,
    };
  }
  render() {
    return <AssignmentFlex assignment={this.state.assignment21} />;
  }
}
export default Assignment21;
