import React from "react";
import STATISTICS_DATA from "../ClassData/statistics";
import StatisticsVideoCard from "./statistics-video-card.component";
class StatisticsFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      statistics: STATISTICS_DATA,
    };
  }
  render() {
    return <StatisticsVideoCard statistics={this.state.statistics} />;
  }
}
export default StatisticsFlex;