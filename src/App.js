import React from 'react';
import Popup from './components/Popup/Popup';
import BoardList from './components/BoardList/BoardList';
import Board from './components/BoardList/Board/Board';

import './App.css';

const boards = [
  {
    id: 1,
    name: 'TODO'
  },
  {
    id: 2,
    name: 'In Progress'
  },
  {
    id: 3,
    name: 'Testing'
  },
  {
    id: 4,
    name: 'Done'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      auth: false,
      boards
    };
  }

  setUserName = (userName) => {
    this.setState({
        userName
    });
  }

  setAuth = (auth) => {
    this.setState({
        auth
    });
  }

  updateBoardName = (name, id) => {
    const updateBoards = this.state.boards.map(board => {
      if (board.id === id) {
        return {
          id,
          name
        }
      }
      return board;
    });

    this.setState(() => ({
      boards: updateBoards
    }));
  }

  render = () => {
    return (
      <div className="App">
        { this.state.auth 
          ? <Popup setUserName={this.setUserName} setAuth={this.setAuth}/> 
          : <BoardList 
              userName={this.state.userName} 
              boards={this.state.boards}
              renderBoard={board => <Board board={board} updateBoardName={this.updateBoardName}/>}
              updateBoardName={this.updateBoardName} /> }
      </div>
    );
  }
}

export default App;
