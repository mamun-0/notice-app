import React from "react";
import ALGORITHMS_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/algorithms";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class AlgorithmsFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      algorithmsData: ALGORITHMS_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.algorithmsData} />;
  }
}
export default AlgorithmsFlex;
