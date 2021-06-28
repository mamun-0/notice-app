import React from "react";
import "./files-card.style.css";
const FilesCard = ({ year, semesterName, data }) => {
  return (
    <div className='preview-container'>
      <h2>{`${year} ${semesterName}`}</h2>
      <div className="preview-cards">
      {data.map(({
        id,
        teacherName,
        subjectCode,
        subjectName,
        a_tag_title,
        link,
      })=>
      <div key={id} className='card-container'>
        <ul className='card-container__flex'>
          <li>{subjectCode}</li>
          <li>{subjectName}</li>
          <li>{teacherName}</li>
          <li><a href={link}>{a_tag_title}</a></li>
        </ul>
      </div>
      )}
      </div>
    </div>
  );
};

export default FilesCard;
