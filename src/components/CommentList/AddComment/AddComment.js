import React from "react";

import styles from "./AddComment.module.css";
import TextArea from "../../TextArea/TextArea";

class AddComment extends React.Component {
  render = () => {
    return (
      <div className={styles.addComment}>
        <TextArea
          placeholder="Write a comment..."
          setText={this.props.setText}
          text={this.props.text}
        />
        <button onClick={this.props.handleAddComment}>Save</button>
      </div>
    );
  };
}

export default AddComment;
