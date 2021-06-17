import React from "react";
import DLD_DATA from "../../../OnlineClass/ClassData/SecondYearSecondSemester/dld";
import VideoFlex from "../../../VideoFlex/videoflex.component";
class DLDFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      dldData: DLD_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.dldData} />;
  }
}
export default DLDFlex;