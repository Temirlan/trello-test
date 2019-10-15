import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";

import ModalCardContainer from "./ModalCardContainer";
import Card from "../components/CardList/Card/Card";

const CardContainer = props => (
  <Card
    card={props.card}
    deleteCard={() => props.deleteCard(props.card.id)}
    renderModalCard={() => <ModalCardContainer card={props.card} />}
  />
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  deleteCard: actions.deleteCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
