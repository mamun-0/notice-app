import React from "react";
import ACC_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/acc";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class AccFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      accData: ACC_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.accData} />;
  }
}
export default AccFlex;
