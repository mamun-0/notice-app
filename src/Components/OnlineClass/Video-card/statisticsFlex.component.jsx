import React from "react";
import STATISTICS_DATA from "../ClassData/statistics";
import VideoFlex from "../../VideoFlex/videoflex.component";
class StatisticsFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      statistics: STATISTICS_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.statistics} />;
  }
}
export default StatisticsFlex;
