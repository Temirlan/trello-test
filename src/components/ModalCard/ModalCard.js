import React from "react";
import { Modal } from "react-bootstrap";
import Title from "../Title/Title";

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
    this.props.handleClick();
  };

  render() {
    const { name, userName } = this.props.card;
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Title name={`${userName}: ${name}`} />
              <p>Board: {this.props.nameBoard}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Description</p>
            <p>Comments</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalWindow;
