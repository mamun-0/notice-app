import React from "react";
import "./video.style.css";
const VideoFlex = (props) => (
  <div className='sidebar--right--area'>
    <div className='video-card'>
      {props.videoData.map((item) => (
        <div key={item.id} className='video-card__container'>
          <iframe
            src={item.videoUrl}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
          <h2 className='video-card__title'>{item.videoTitle}</h2>
        </div>
      ))}
    </div>
  </div>
);
export default VideoFlex;
