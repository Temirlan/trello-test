import React from "react";
import PropTypes from "prop-types";

import styles from "./Title.module.css";

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateText: false,
      name: this.props.name
    };
  }

  handleChange = e => {
    const name = e.target.value;

    this.setState({
      name
    });
  };

  handleClick = () => {
    this.setState(state => ({
      updateText: !state.updateText
    }));
  };

  handleEnterPress = e => {
    if (e.key === "Enter") {
      this.handleUpdateName();
    }
  };

  handleUpdateName = () => {
    this.props.updateName(this.state.name);
    this.handleClick();
  };

  render = () => {
    const { updateText } = this.state;
    return (
      <div>
        {!updateText && (
          <p className={styles.title} onClick={this.handleClick}>
            {this.props.name}
          </p>
        )}
        {updateText && (
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            onKeyDown={this.handleEnterPress}
            onBlur={this.handleUpdateName}
          />
        )}
      </div>
    );
  };
}

Title.propTypes = {
  value: PropTypes.string,
  updateName: PropTypes.func.isRequired
};

export default Title;
