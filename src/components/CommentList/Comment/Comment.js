import React from "react";

import styles from "./Comment.module.css";
import AddComment from "../AddComment/AddComment";

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleChangeComment: false,
      changeTextComent: this.props.comment.text
    };
  }

  handleToggleChangeComment = () => {
    this.setState(state => ({
      toggleChangeComment: !state.toggleChangeComment
    }));
  };

  setChangeTextComent = text => {
    this.setState({
      changeTextComent: text
    });
  };

  handleUpdateComment = () => {
    this.handleToggleChangeComment();

    this.props.updateCommentCard(this.state.changeTextComent);
  };

  handleDeleteComment = () => {
    this.props.deleteCommentCard();
  };

  render = () => {
    return (
      <div>
        <div className={styles.comment}>
          <div className={styles.commentUserName}>
            {this.props.comment.name}:
          </div>
          {!this.state.toggleChangeComment && (
            <div className={styles.commentText}>{this.props.comment.text}</div>
          )}
          {this.state.toggleChangeComment && (
            <AddComment
              text={this.props.comment.text}
              setText={this.setChangeTextComent}
              handleAddComment={this.handleUpdateComment}
            />
          )}
        </div>
        {!this.state.toggleChangeComment && (
          <div className={styles.commentActionButtons}>
            <button onClick={this.handleToggleChangeComment}>Change</button>
            <button onClick={this.handleDeleteComment}>Delete</button>
          </div>
        )}
      </div>
    );
  };
}

export default Comment;
