import React from "react";
import Modal from "react-modal";
import Title from "../../Title/Title";
import styles from "./ModalCard.module.css";
import ModalCardDescription from "./ModalCardDescription/ModalCardDescription";
import ReactDOM from "react-dom";

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

    this.modal = React.createRef();
  }

  componentDidUpdate = () => {
    // this.modal.current.node.firstElementChild.firstElementChild.focus();
    this.modal.current.focus();
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });

    this.props.handleClick();
  };

  render() {
    const { name, userName, description } = this.props.card;
    return (
      <>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Card Modal"
        >
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {userName}:
              <Title name={name} updateName={this.props.updateCardName} />
            </div>
            <button ref={this.modal} onClick={this.closeModal}>
              close
            </button>
          </div>
          <ModalCardDescription
            description={description}
            addCardDescription={this.props.addCardDescription}
          />
          <p>Comments</p>
        </Modal>
      </>
    );
  }
}

export default ModalCard;
