import React from "react";
import "./notice.style.css";
const NoticeBoard = (props) =>
  props.noticeInformation.map((item) => (
    <div key={item.id} className='notice--card'>
      <h2 className='notice__heading'>{item.noticeHeading}</h2>
      <p className='notice__discription nospace'>{item.noticeDetails}</p>
      {/* <a className='notice__details btn' href='/'>
        Details
      </a> */}
      <p className='notice__published nospace'>{item.publishedDate}</p>
    </div>
  ));
export default NoticeBoard;
