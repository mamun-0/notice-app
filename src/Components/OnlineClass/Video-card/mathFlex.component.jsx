import React from "react";
import MATH_DATA from "../ClassData/mathClassData";
import VideoFlex  from "../../VideoFlex/videoflex.component";
class MathFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      math: MATH_DATA,
    };
  }
  render(){
    return(
      <VideoFlex videoData={this.state.math}/>
    )
  }
}

export default MathFlex;