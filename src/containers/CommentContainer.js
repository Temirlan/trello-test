import React from "react";
import { connect } from "react-redux";
import Comment from "../components/CommentList/Comment/Comment";
import * as actions from "../redux/actions";

const CommentContainer = props => (
  <Comment
    comment={props.comment}
    updateCommentCard={changeTextComent =>
      props.updateCommentCard({
        changeTextComent,
        idCard: props.card.id,
        idComment: props.comment.id
      })
    }
    deleteCommentCard={() =>
      props.deleteCommentCard({
        idComment: props.comment.id
      })
    }
  />
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  updateCommentCard: actions.updateCommentCard,
  deleteCommentCard: actions.deleteCommentCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer);
