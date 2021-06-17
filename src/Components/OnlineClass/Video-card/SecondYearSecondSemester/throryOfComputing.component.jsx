import React from "react";
import COMPUTING_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/theoryOfComputing";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class ComputingFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      computingData: COMPUTING_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.computingData} />;
  }
}
export default ComputingFlex;
