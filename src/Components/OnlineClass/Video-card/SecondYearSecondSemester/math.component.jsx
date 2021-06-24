import React from "react";
import MATH_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/math";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class MathFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      mathData: MATH_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.mathData} />;
  }
}
export default MathFlex;
