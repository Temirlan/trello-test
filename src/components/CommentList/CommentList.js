import React from "react";

import styles from "./CommentList.module.css";

const CommentList = props => {
  const renderComment = () => {
    return props.comments.map(comment => {
      return React.cloneElement(props.renderComment(comment), {
        key: comment.id,
        comment
      });
    });
  };

  return (
    <div className={styles.commentList}>
      <p>Comments</p>
      {renderComment()}
    </div>
  );
};

export default CommentList;
