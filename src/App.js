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
        userName: "Temirlan"
      },
      {
        id: 2,
        name: "create css",
        userName: "Temirlan"
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

  addCard = (name, idBoard) => {
    const size = this.state.boards[idBoard - 1].cards.length;
    let boards = [...this.state.boards];

    boards[idBoard - 1].cards.push({
      id: size + 1,
      name,
      userName: this.state.userName
    });

    this.setState({
      boards: [...boards]
    });
  };

  deleteCard = (idBoard, idCard) => {
    let filterCards = this.state.boards[idBoard - 1].cards.filter(
      card => card.id !== idCard
    );

    let deleteBoardCards = this.state.boards.map(board => {
      if (board.id === idBoard) {
        board.cards = filterCards;

        return board;
      }
      return board;
    });

    this.setState({
      boards: deleteBoardCards
    });
  };

  render = () => {
    return (
      <div className="App">
        {!this.state.auth ? (
          <Popup setUserName={this.setUserName} setAuth={this.setAuth} />
        ) : (
          <BoardList
            userName={this.state.userName}
            boards={this.state.boards}
            renderBoard={board => (
              <Board
                board={board}
                updateBoardName={this.updateBoardName}
                addCard={this.addCard}
                deleteCard={this.deleteCard}
              />
            )}
            updateBoardName={this.updateBoardName}
          />
        )}
      </div>
    );
  };
}

export default App;
