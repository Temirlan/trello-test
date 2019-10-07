import React from "react";
import { Modal, Button } from "react-bootstrap";
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
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalWindow;
