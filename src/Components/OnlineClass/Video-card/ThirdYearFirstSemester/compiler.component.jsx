import React from 'react';
import COMPILER_DATA from '../../../OnlineClass/ClassData/ThirdYearFirstSemester/compiler';
import VideoFlex from '../../../VideoFlex/videoflex.component';
class CompilerFlex extends React.Component {
  constructor() {
    super();
    this.state = {
      compilerData: COMPILER_DATA,
    };
  }
  render() {
    return <VideoFlex videoData={this.state.compilerData} />;
  }
}
export default CompilerFlex;
