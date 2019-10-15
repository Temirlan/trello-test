import React from "react";
import CommentList from "../components/CommentList/CommentList";
import CommentContainer from "./CommentContainer";

const CommentListContainer = props => (
  <CommentList
    comments={props.comments}
    renderComment={comment => (
      <CommentContainer comment={comment} card={props.card} />
    )}
  />
);

export default CommentListContainer;
