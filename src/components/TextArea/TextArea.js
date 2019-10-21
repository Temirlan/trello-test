import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  handleChange = e => {
    const value = e.target.value;

    this.setState({
      text: value
    });

    this.props.setText(value);
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

TextArea.propTypes = {
  placeholder: PropTypes.string,
  setText: PropTypes.func.isRequired,
  handleText: PropTypes.func
};

export default TextArea;
