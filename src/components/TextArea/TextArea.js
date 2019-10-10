import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  handleChange = e => {
    const value = e.target.value;

    this.setState(() => {
      this.props.setText(value);
      return {
        text: value
      };
    });
  };

  render() {
    return (
      <div>
        <textarea
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleChange}
          onBlur={this.props.handleText}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
