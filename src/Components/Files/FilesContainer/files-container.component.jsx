import React from "react";
import SEMESTERS_FILES from "../data/data";
import FilesCard from "../FilesCard/files-card.component";
class FileContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      semesterFiles: SEMESTERS_FILES,
    };
  }
  render() {
    return (
      <div className='file-container'>
        {this.state.semesterFiles.map(({ id, ...otherItemsProps }) => (
          <FilesCard key={id} {...otherItemsProps} />
        ))}
      </div>
    );
  }
}
export default FileContainer;