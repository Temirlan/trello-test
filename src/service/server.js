import { InitialBoards } from "./boards";

export const getBoards = () => {
  const localBoards = localStorage.getItem("boards");

  return localBoards ? JSON.parse(localBoards) : InitialBoards;
};

export const updateBoardName = (boards, { name, idBoard }) => {
  const updateBoards = boards.map(board => {
    if (board.id === idBoard) {
      return {
        id: idBoard,
        name,
        cards: board.cards
      };
    }
    return board;
  });

  localStorage.setItem("boards", JSON.stringify(updateBoards));

  return updateBoards;
};

export const addCard = (boards, { userName, name, idBoard }) => {
  const updatedBoards = boards.map(board => {
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
            userName,
            description: "",
            comments: []
          }
        ]
      };
    }
    return board;
  });

  localStorage.setItem("boards", JSON.stringify(updatedBoards));

  return updatedBoards;
};

export const deleteCard = (boards, { idBoard, idCard }) => {
  const deletedBoards = boards.map(board => {
    if (board.id === idBoard) {
      return {
        ...board,
        cards: board.cards.filter(card => card.id !== idCard)
      };
    }
    return board;
  });

  localStorage.setItem("boards", JSON.stringify(deletedBoards));

  return deletedBoards;
};

export const updateCardName = (boards, { name, idBoard, idCard }) => {
  const updatedBoards = boards.map(board => {
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

  localStorage.setItem("boards", JSON.stringify(updatedBoards));

  return updatedBoards;
};
