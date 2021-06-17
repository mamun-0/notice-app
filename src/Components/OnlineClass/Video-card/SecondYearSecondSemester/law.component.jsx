import React from "react";
import LAW_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/law";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class LawFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      lawData: LAW_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.lawData} />;
  }
}
export default LawFlex;
