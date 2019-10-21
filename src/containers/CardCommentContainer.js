import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";
import CardComment from "../components/CardList/ModalCard/CardComment/CardComment";
import CommentListContainer from "./CommentListContainer";

const CardCommentContainer = props => (
  <CardComment
    userName={props.userName}
    addCommentCard={textComment =>
      props.addCommentCard({
        userName: props.userName,
        textComment,
        idCard: props.card.id
      })
    }
    renderCommentList={() => (
      <CommentListContainer comments={props.comments} card={props.card} />
    )}
  />
);

const mapStateToProps = state => {
  return {
    userName: state.auth.userName
  };
};

const mapDispatchToProps = {
  addCommentCard: actions.addCommentCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCommentContainer);
