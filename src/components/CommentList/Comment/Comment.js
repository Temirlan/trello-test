import React from "react";

import styles from "./Comment.module.css";

class Comment extends React.Component {
  render = () => {
    return (
      <div>
        <div className={styles.comment}>
          <div className={styles.commentUserName}>
            {this.props.comment.name}:
          </div>
          <div className={styles.commentText}>{this.props.comment.text}</div>
        </div>
        <div className={styles.commentActionButtons}>
          <button>Change</button>
          <button>Delete</button>
        </div>
      </div>
    );
  };
}

export default Comment;
