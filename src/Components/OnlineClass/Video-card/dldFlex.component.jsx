import React from "react";
import DLD_DATA from "../ClassData/dld";
import VideoFlex from "../../VideoFlex/videoflex.component";
class DldFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      dld: DLD_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.dld} />;
  }
}
export default DldFlex;
