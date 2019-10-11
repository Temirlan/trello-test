import React from "react";
import PropTypes from "prop-types";

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

AddComment.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func.isRequired,
  handleAddComment: PropTypes.func.isRequired
};

export default AddComment;
