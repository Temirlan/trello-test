import { createSelector } from "reselect";

export const boardsSelector = state => state.boards;
export const cardsSelector = state => state.cards;
export const commentsSelector = state => state.comments;

export const getBoards = createSelector(
  [boardsSelector, cardsSelector, commentsSelector],
  (boards, cards, comments) => {
    return boards.map(board => {
      const boardCards = cards.filter(card => {
        return card.idBoard === board.id;
      });

      return {
        ...board,
        cards: boardCards.map(card => {
          return {
            ...card,
            comments: comments.filter(comment => comment.idCard === card.id)
          };
        })
      };
    });
  }
);
