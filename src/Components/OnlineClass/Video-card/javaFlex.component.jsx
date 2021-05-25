import React from "react";
import JAVA_TECHNOLOGY_DATA from "../ClassData/javaTechnology";
import JavaTechnologyVideoCard from "./java-technology-video-card.component";
class JavaFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      javatechnology: JAVA_TECHNOLOGY_DATA,
    };
  }
  render() {
    return (
      <JavaTechnologyVideoCard javatechnology={this.state.javatechnology} />
    );
  }
}
export default JavaFlex;
