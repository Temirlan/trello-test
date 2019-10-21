import React from "react";
import { connect } from "react-redux";

import * as actions from "../redux/actions";
import CardDescription from "../components/CardList/ModalCard/CardDescription/CardDescription";

const CardDescriptionContainer = props => (
  <CardDescription
    description={props.description}
    addCardDescription={text =>
      props.addCardDescription({
        text,
        idCard: props.card.id
      })
    }
  />
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  addCardDescription: actions.addCardDescription
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDescriptionContainer);
