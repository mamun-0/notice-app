import React from "react";
import DATA_STRUCTURE from "../ClassData/dataStructure";
import DataStructureVideoCard from "./data-structure-video-card.component";
class DataStructureFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      datastructure: DATA_STRUCTURE,
    };
  }
  render() {
    return (
      <DataStructureVideoCard datastructure={this.state.datastructure} />
    );
  }
}
export default DataStructureFlex