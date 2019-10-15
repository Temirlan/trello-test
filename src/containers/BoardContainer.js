import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";
import Board from "../components/BoardList/Board/Board";
import CardList from "../components/CardList/CardList";
import CardContainer from "./CardContainer";

const BoardContainer = props => (
  <Board
    board={props.board}
    updateBoardName={name =>
      props.updateBoardName({
        name,
        idBoard: props.board.id
      })
    }
    addCard={name =>
      props.addCard({
        name,
        idBoard: props.board.id,
        userName: props.userName
      })
    }
    renderCardList={cards => (
      <CardList
        cards={cards}
        renderCard={card => <CardContainer card={card} />}
      />
    )}
  />
);

const mapStateToProps = state => {
  return {
    userName: state.auth.userName
  };
};

const mapDispatchToProps = {
  updateBoardName: actions.updateBoardName,
  addCard: actions.addCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);
