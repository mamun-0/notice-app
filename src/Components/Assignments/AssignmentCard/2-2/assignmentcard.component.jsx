import React from "react";
import AssignmentFlex from "../../../AssignmentFlex/assignmentflex.component";
import ASSIGNMENT_22 from "./data";
class Assignment22 extends React.Component {
  constructor() {
    super();
    this.state = {
      assignment22: ASSIGNMENT_22,
    };
  }
  render() {
    return <AssignmentFlex assignment={this.state.assignment22} />;
  }
}
export default Assignment22;
