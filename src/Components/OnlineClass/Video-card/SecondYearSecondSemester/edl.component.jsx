import React from "react";
import EDL_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/edl";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class EdlFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      edlData: EDL_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.edlData} />;
  }
}
export default EdlFlex;
