import React from "react";
import Popup from "./components/Popup/Popup";
import BoardList from "./components/BoardList/BoardList";
import Board from "./components/BoardList/Board/Board";

import "./App.css";

const boards = [
  {
    id: 1,
    name: "TODO",
    cards: [
      {
        id: 1,
        name: "create component",
        userName: "Temirlan",
        description: ""
      },
      {
        id: 2,
        name: "create css",
        userName: "Temirlan",
        description: ""
      }
    ]
  },
  {
    id: 2,
    name: "In Progress",
    cards: []
  },
  {
    id: 3,
    name: "Testing",
    cards: []
  },
  {
    id: 4,
    name: "Done",
    cards: []
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      auth: false,
      boards
    };
  }

  setUserName = userName => {
    this.setState({
      userName
    });
  };

  setAuth = auth => {
    this.setState({
      auth
    });
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
              description: ""
            }
          ]
        };
      }
      return board;
    });

    this.setState({
      boards: updatedBoards
    });
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
  };

  addCardDescription = (text, idBoard, idCard) => {
    let updatedBoards = this.state.boards.map(board => {
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
  };

  render = () => {
    return (
      <div className="App">
        {this.state.auth ? (
          <Popup setUserName={this.setUserName} setAuth={this.setAuth} />
        ) : (
          <BoardList
            userName={this.state.userName}
            boards={this.state.boards}
            renderBoard={board => (
              <Board
                board={board}
                updateBoardName={this.updateBoardName}
                updateCardName={this.updateCardName}
                addCard={this.addCard}
                deleteCard={this.deleteCard}
                addCardDescription={this.addCardDescription}
              />
            )}
          />
        )}
      </div>
    );
  };
}

export default App;
