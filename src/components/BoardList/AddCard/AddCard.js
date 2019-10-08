import React from "react";

class AddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textArea: ""
    };
  }

  handleChangeTextArea = e => {
    const value = e.target.value;

    this.setState({
      textArea: value
    });
  };

  createCard = () => {
    this.props.addCard(this.state.textArea);
  };

  render = () => {
    return (
      <div>
        <textarea
          placeholder="Enter title for this new card"
          value={this.state.textArea}
          onChange={this.handleChangeTextArea}
        ></textarea>
        <button onClick={this.createCard}>add card</button>
      </div>
    );
  };
}

export default AddCard;
