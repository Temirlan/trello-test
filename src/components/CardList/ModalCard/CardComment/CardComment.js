import React from "react";
import styles from "./CardComment.module.css";
import TextArea from "../../../TextArea/TextArea";
import CommentList from "../../../CommentList/CommentList";
import AddComment from "../../../CommentList/AddComment/AddComment";

class CardComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleAddComment: false,
      textComment: ""
    };
  }

  setTextComment = textComment => {
    this.setState({
      textComment
    });
  };

  handleToggleAddComment = () => {
    this.setState(state => ({
      toggleAddComment: !state.toggleAddComment
    }));
  };

  handleAddComment = () => {
    this.handleToggleAddComment();

    this.props.addCommentCard(this.state.textComment);
  };

  render = () => {
    return (
      <div>
        <div className={styles.cardAddComment}>
          <div className={styles.name}>{this.props.userName}: </div>
          {!this.state.toggleAddComment && (
            <div
              onClick={this.handleToggleAddComment}
              className={styles.writeComment}
            >
              Write a comment...
            </div>
          )}
          {this.state.toggleAddComment && (
            <AddComment
              setText={this.setTextComment}
              handleAddComment={this.handleAddComment}
            />
          )}
        </div>
        <CommentList
          comments={this.props.comments}
          updateCommentCard={this.props.updateCommentCard}
          deleteCommentCard={this.props.deleteCommentCard}
        />
      </div>
    );
  };
}

export default CardComment;
