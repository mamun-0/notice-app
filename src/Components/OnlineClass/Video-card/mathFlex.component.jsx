import React from "react";
import MATH_DATA from "../ClassData/mathClassData";
import MathVideoCard from './math-video-card.component'
class MathFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      math: MATH_DATA,
    };
  }
  render(){
    return(
      <MathVideoCard math={this.state.math}/>
    )
  }
}

export default MathFlex;