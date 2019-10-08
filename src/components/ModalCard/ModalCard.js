import React from "react";
import Modal from "react-modal";
import Title from "../Title/Title";
import styles from "./ModalCard.module.css";

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "500px",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class ModalCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true
    };
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.props.handleClick();
  };

  render() {
    const { name, userName } = this.props.card;
    return (
      <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {userName}:
              <Title name={name} updateName={this.props.updateCardName} />
            </div>
            <button onClick={this.closeModal}>close</button>
          </div>
          <p>Description</p>
          <p>Comments</p>
        </Modal>
      </>
    );
  }
}

export default ModalCard;
