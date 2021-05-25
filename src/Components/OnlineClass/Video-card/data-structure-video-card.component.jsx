import React from "react";
import "./video-card.style.css";
const DataStructureVideoCard = (props) => {
  return (
    <div className='sidebar--right--area'>
      <div className='video-card'>
      {props.datastructure.map((item) => (
          <div key={item.id} className='video-card__container'>
            <iframe
              src={item.videoUrl}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
            <h2 className='video-card__title'>{item.videoTitle}</h2>
          </div>
      ))}
      </div>
    </div>
  );
};
export default DataStructureVideoCard;
