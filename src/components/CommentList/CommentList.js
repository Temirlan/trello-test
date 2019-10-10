import React from "react";

import Comment from "./Comment/Comment";
import styles from "./CommentList.module.css";

const CommentList = props => {
  const comments = props.comments.map(comment => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div className={styles.commentList}>
      <p>Comments</p>
      {comments}
    </div>
  );
};

export default CommentList;
