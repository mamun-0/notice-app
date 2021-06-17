import React from "react";
import JAVA_TECHNOLOGY_DATA from "../ClassData/javaTechnology";
import VideoFlex from "../../VideoFlex/videoflex.component";
class JavaFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      javatechnology: JAVA_TECHNOLOGY_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.javatechnology} />;
  }
}
export default JavaFlex;
