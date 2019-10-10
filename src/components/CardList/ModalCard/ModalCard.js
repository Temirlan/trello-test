import React from "react";
import Modal from "react-modal";
import Title from "../../Title/Title";
import styles from "./ModalCard.module.css";
import CardDescription from "./CardDescription/CardDescription";
import CardComment from "./CardComment/CardComment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "500px",
    height: "80vh",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll"
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
    const { name, userName, description, comments } = this.props.card;
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
          <CardDescription
            description={description}
            addCardDescription={this.props.addCardDescription}
          />
          <CardComment
            comments={comments}
            addCommentCard={this.props.addCommentCard}
          />
        </Modal>
      </>
    );
  }
}

export default ModalCard;
