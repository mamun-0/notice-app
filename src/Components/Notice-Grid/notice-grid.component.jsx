import React from "react";
import "../Grid-CSS/grid-css.style.css";
import NoticeBoard from "../Notice/notice.component";
import NOTICE_DATA from "./noticeData";
class NoticeGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      noticeInformation: NOTICE_DATA,
    };
  }
  render() {
    return (
      <div className='grid grid--1x2 grid-page-padding'>
        <NoticeBoard noticeInformation={this.state.noticeInformation} />
      </div>
    );
  }
}
export default NoticeGrid;
