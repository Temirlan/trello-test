import React from "react";
import Popup from "./components/Popup/Popup";
import BoardList from "./components/BoardList/BoardList";
import Board from "./components/BoardList/Board/Board";

import "./App.css";
import Card from "./components/CardList/Card/Card";
import CardList from "./components/CardList/CardList";
import ModalCard from "./components/CardList/ModalCard/ModalCard";
import CardDescription from "./components/CardList/ModalCard/CardDescription/CardDescription";
import CardComment from "./components/CardList/ModalCard/CardComment/CardComment";
import CommentList from "./components/CommentList/CommentList";
import Comment from "./components/CommentList/Comment/Comment";
import { getBoards } from "./redux/selectors";

import { connect } from "react-redux";

import * as actions from "./redux/actions";
// import CommentContainer from "./containers/CommentContainer";
import CommentListContainer from "./containers/CommentListContainer";

// const renderComment = (comment, card, props) => (
//   <Comment
//     comment={comment}
//     updateCommentCard={changeTextComent =>
//       props.updateCommentCard({
//         changeTextComent,
//         idCard: card.id,
//         idComment: comment.id
//       })
//     }
//     deleteCommentCard={() =>
//       props.deleteCommentCard({
//         idComment: comment.id
//       })
//     }
//   />
// );

const renderCommentList = (comments, card) => (
  <CommentListContainer comments={comments} card={card} />
);

const renderCardComment = (comments, card, props) => (
  <CardComment
    userName={props.userName}
    addCommentCard={textComment =>
      props.addCommentCard({
        userName: props.userName,
        textComment,
        idCard: card.id
      })
    }
    renderCommentList={() => renderCommentList(comments, card, props)}
  />
);

const renderCardDescription = (description, card, props) => (
  <CardDescription
    description={description}
    addCardDescription={text =>
      props.addCardDescription({
        text,
        idCard: card.id
      })
    }
  />
);

const renderModalCard = (card, props) => (
  <ModalCard
    card={card}
    updateCardName={name =>
      props.updateCardName({
        name,
        idCard: card.id
      })
    }
    renderCardDescription={description =>
      renderCardDescription(description, card, props)
    }
    renderCardComment={comments => renderCardComment(comments, card, props)}
  />
);

const renderCard = (card, props) => (
  <Card
    card={card}
    deleteCard={() => props.deleteCard(card.id)}
    renderModalCard={() => renderModalCard(card, props)}
  />
);

const renderCardList = (cards, props) => (
  <CardList cards={cards} renderCard={card => renderCard(card, props)} />
);

const renderBoard = (board, props) => (
  <Board
    board={board}
    updateBoardName={name =>
      props.updateBoardName({
        name,
        idBoard: board.id
      })
    }
    addCard={name =>
      props.addCard({
        name,
        idBoard: board.id,
        userName: props.userName
      })
    }
    renderCardList={cards => renderCardList(cards, props)}
  />
);

const Trello = props => {
  return (
    <div className="App">
      {!props.auth && <Popup />}
      {props.auth && (
        <BoardList
          boards={props.boards}
          renderBoard={board => renderBoard(board, props)}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    auth: state.auth.auth,
    boards: getBoards(state)
  };
};

const mapDispatchToProps = {
  addCard: actions.addCard,
  updateBoardName: actions.updateBoardName,
  deleteCard: actions.deleteCard,
  updateCardName: actions.updateCardName,
  addCardDescription: actions.addCardDescription,
  addCommentCard: actions.addCommentCard,
  updateCommentCard: actions.updateCommentCard,
  deleteCommentCard: actions.deleteCommentCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trello);

{
  /* <BoardList
            boards={this.props.boards}
            renderBoard={board => (
              <Board
                board={board}
                updateBoardName={name =>
                  this.props.updateBoardName({
                    name,
                    idBoard: board.id
                  })
                }
                addCard={name =>
                  this.props.addCard({
                    name,
                    idBoard: board.id,
                    userName: this.props.userName
                  })
                }
                renderCardList={cards => (
                  <CardList
                    cards={cards}
                    renderCard={card => (
                      <Card
                        card={card}
                        deleteCard={() => this.props.deleteCard(card.id)}
                        renderModalCard={() => (
                          <ModalCard
                            card={card}
                            updateCardName={name =>
                              this.props.updateCardName({
                                name,
                                idCard: card.id
                              })
                            }
                            renderCardDescription={description => (
                              <CardDescription
                                description={description}
                                addCardDescription={text =>
                                  this.props.addCardDescription({
                                    text,
                                    idCard: card.id
                                  })
                                }
                              />
                            )}
                            renderCardComment={comments => (
                              <CardComment
                                userName={this.props.userName}
                                addCommentCard={textComment =>
                                  this.props.addCommentCard({
                                    userName: this.props.userName,
                                    textComment,
                                    idCard: card.id
                                  })
                                }
                                renderCommentList={() => (
                                  <CommentList
                                    comments={comments}
                                    renderComment={comment => (
                                      <Comment
                                        comment={comment}
                                        updateCommentCard={changeTextComent =>
                                          this.props.updateCommentCard({
                                            changeTextComent,
                                            idCard: card.id,
                                            idComment: comment.id
                                          })
                                        }
                                        deleteCommentCard={() =>
                                          this.props.deleteCommentCard({
                                            idComment: comment.id
                                          })
                                        }
                                      />
                                    )}
                                  />
                                )}
                              />
                            )}
                          />
                        )}
                      />
                    )}
                  />
                )}
              />
            )}
          /> */
}
