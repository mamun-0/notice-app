import React from "react";
import "./notice.style.css";
const NoticeBoard = (props) =>
  props.noticeInformation.map((item) => (
    <div key={item.id} className='notice-wrap'>
      <div className='notice--card'>
        <h2 className='notice__heading notice__heading__small'>
          {item.noticeHeading}
        </h2>
        <p className='notice__discription nospace'>{item.noticeDetails}</p>
        <a className='btn' href={item.downloadLink}>
          {item.a_tag_title}
        </a>
        <ul>{item.topics}</ul>
        <p className='notice__published nospace'>{item.publishedDate}</p>
        <p className='notice__published nospace'>{item.deadLine}</p>
      </div>
    </div>
  ));
export default NoticeBoard;
