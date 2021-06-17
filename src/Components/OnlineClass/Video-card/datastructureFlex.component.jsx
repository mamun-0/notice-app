import React from "react";
import DATA_STRUCTURE from "../ClassData/dataStructure";
import VideoFlex from "../../VideoFlex/videoflex.component";
class DataStructureFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      datastructure: DATA_STRUCTURE,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.datastructure} />;
  }
}
export default DataStructureFlex;
