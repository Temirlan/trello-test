import React from "react";
import styles from "./ModalCardDescription.module.css";
import TextArea from "../../../TextArea/TextArea";

class ModalCardDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleAddDescription: false,
      text: this.props.description
    };
  }

  handleToggleAddDescription = () => {
    this.setState(state => ({
      toggleAddDescription: !state.toggleAddDescription
    }));
  };

  handleAddDescription = () => {
    this.props.addCardDescription(this.state.text);
    this.handleToggleAddDescription();
  };

  setText = text => {
    this.setState({
      text
    });
  };

  render() {
    return (
      <div>
        <p>Description</p>
        {!this.state.toggleAddDescription && (
          <div
            onClick={this.handleToggleAddDescription}
            className={styles.addDescription}
          >
            {!this.state.text && <>Add description...</>}
            {this.state.text && <>{this.props.description}</>}
          </div>
        )}
        {this.state.toggleAddDescription && (
          <>
            <TextArea
              text={this.state.text}
              setText={this.setText}
              handleText={this.handleAddDescription}
            />
            <button onClick={this.handleAddDescription}>Save</button>
          </>
        )}
      </div>
    );
  }
}

export default ModalCardDescription;
