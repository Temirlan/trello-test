import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";
import ModalCard from "../components/CardList/ModalCard/ModalCard";
import CardDescriptionContainer from "./CardDescriptionContainer";
import CardCommentContainer from "./CardCommentContainer";

const ModalCardContainer = props => (
  <ModalCard
    card={props.card}
    handleClick={props.handleClick}
    updateCardName={name =>
      props.updateCardName({
        name,
        idCard: props.card.id
      })
    }
    renderCardDescription={description => (
      <CardDescriptionContainer description={description} card={props.card} />
    )}
    renderCardComment={comments => (
      <CardCommentContainer comments={comments} card={props.card} />
    )}
  />
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  updateCardName: actions.updateCardName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCardContainer);
