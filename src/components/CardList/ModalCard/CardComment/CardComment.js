import React from "react";
import styles from "./CardComment.module.css";
import TextArea from "../../../TextArea/TextArea";
import CommentList from "../../../CommentList/CommentList";

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
          <div className={styles.name}>Temirlan: </div>
          {!this.state.toggleAddComment && (
            <div
              onClick={this.handleToggleAddComment}
              className={styles.writeComment}
            >
              Write a comment...
            </div>
          )}
          {this.state.toggleAddComment && (
            <div className={styles.addComment}>
              <TextArea
                placeholder="Write a comment..."
                setText={this.setTextComment}
              />
              <button onClick={this.handleAddComment}>Save</button>
            </div>
          )}
        </div>
        <CommentList comments={this.props.comments} />
      </div>
    );
  };
}

export default CardComment;
