import React from "react";
import Modal from "react-modal";
import Title from "../../Title/Title";
import styles from "./ModalCard.module.css";
import ModalCardDescription from "./ModalCardDescription/ModalCardDescription";

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

  componentDidUpdate = () => {
    this.contentRef.focus();
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
          contentRef={node => (this.contentRef = node)}
        >
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {userName}:
              <Title name={name} updateName={this.props.updateCardName} />
            </div>
            <button onClick={this.closeModal}>close</button>
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
