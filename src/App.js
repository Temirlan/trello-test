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

import { connect } from "react-redux";

import { getBoards } from "./redux/actions/boards";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: []
    };
  }

  componentDidMount = () => {
    this.props.getBoards();
  };

  updateBoardName = (name, id) => {
    const updateBoards = this.state.boards.map(board => {
      if (board.id === id) {
        return {
          id,
          name,
          cards: board.cards
        };
      }
      return board;
    });

    this.setState(() => ({
      boards: updateBoards
    }));

    localStorage.setItem("boards", JSON.stringify(updateBoards));
  };

  updateCardName = (name, idBoard, idCard) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.map(card => {
            if (card.id === idCard) {
              return {
                ...card,
                name
              };
            }
            return card;
          })
        };
      }

      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  addCard = (name, idBoard) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        let nextId = 1;
        const lengthCard = board.cards.length;

        if (lengthCard) {
          nextId = board.cards[lengthCard - 1].id + 1;
        }

        return {
          ...board,
          cards: [
            ...board.cards,
            {
              id: nextId,
              name,
              userName: this.state.userName,
              description: "",
              comments: []
            }
          ]
        };
      }
      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  deleteCard = (idBoard, idCard) => {
    let deletedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.filter(card => card.id !== idCard)
        };
      }
      return board;
    });

    this.setState({
      boards: deletedBoards
    });

    localStorage.setItem("boards", JSON.stringify(deletedBoards));
  };

  addCardDescription = (text, idBoard, idCard) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.map(card => {
            if (card.id === idCard) {
              return {
                ...card,
                description: text
              };
            }
            return card;
          })
        };
      }

      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  addCommentCard = (textComment, idBoard, idCard) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.map(card => {
            if (card.id === idCard) {
              let nextId = 1;

              if (card.comments.length) {
                nextId = card.comments[0].id + 1;
              }

              return {
                ...card,
                comments: [
                  {
                    id: nextId,
                    name: this.state.userName,
                    text: textComment
                  },
                  ...card.comments
                ]
              };
            }
            return card;
          })
        };
      }
      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  updateCommentCard = (textComment, idBoard, idCard, idComment) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.map(card => {
            if (card.id === idCard) {
              return {
                ...card,
                comments: card.comments.map(comment => {
                  if (comment.id === idComment) {
                    return {
                      ...comment,
                      text: textComment
                    };
                  }
                  return comment;
                })
              };
            }
            return card;
          })
        };
      }
      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  deleteCommentCard = (idBoard, idCard, idComment) => {
    const updatedBoards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        return {
          ...board,
          cards: board.cards.map(card => {
            if (card.id === idCard) {
              return {
                ...card,
                comments: card.comments.filter(
                  comment => comment.id !== idComment
                )
              };
            }
            return card;
          })
        };
      }
      return board;
    });

    this.setState({
      boards: updatedBoards
    });

    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  render = () => {
    return (
      <div className="App">
        {!this.props.auth && <Popup />}
        {this.props.auth && (
          <BoardList />
          //   <BoardList
          //   renderBoard={board => (
          //     <Board
          //       board={board}
          //       updateBoardName={name => this.updateBoardName(name, board.id)}
          //       addCard={name => this.addCard(name, board.id)}
          //       renderCardList={cards => (
          //         <CardList
          //           cards={cards}
          //           renderCard={card => (
          //             <Card
          //               card={card}
          //               deleteCard={() => this.deleteCard(board.id, card.id)}
          //               renderModalCard={() => (
          //                 <ModalCard
          //                   card={card}
          //                   updateCardName={name =>
          //                     this.updateCardName(name, board.id, card.id)
          //                   }
          //                   renderCardDescription={description => (
          //                     <CardDescription
          //                       description={description}
          //                       addCardDescription={text =>
          //                         this.addCardDescription(
          //                           text,
          //                           board.id,
          //                           card.id
          //                         )
          //                       }
          //                     />
          //                   )}
          //                   renderCardComment={comments => (
          //                     <CardComment
          //                       userName={this.state.userName}
          //                       addCommentCard={textComment =>
          //                         this.addCommentCard(
          //                           textComment,
          //                           board.id,
          //                           card.id
          //                         )
          //                       }
          //                       renderCommentList={() => (
          //                         <CommentList
          //                           comments={comments}
          //                           renderComment={comment => (
          //                             <Comment
          //                               comment={comment}
          //                               updateCommentCard={changeTextComent =>
          //                                 this.updateCommentCard(
          //                                   changeTextComent,
          //                                   board.id,
          //                                   card.id,
          //                                   comment.id
          //                                 )
          //                               }
          //                               deleteCommentCard={() =>
          //                                 this.deleteCommentCard(
          //                                   board.id,
          //                                   card.id,
          //                                   comment.id
          //                                 )
          //                               }
          //                             />
          //                           )}
          //                         />
          //                       )}
          //                     />
          //                   )}
          //                 />
          //               )}
          //             />
          //           )}
          //         />
          //       )}
          //     />
          //   )}
          // />
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = { getBoards };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
