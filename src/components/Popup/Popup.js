import React from "react";
import { connect } from "react-redux";

import { enterText, authUser } from "../../redux/actions/auth";

import styles from "./Popup.module.css";

class Popup extends React.Component {
  handleChange = e => {
    const value = e.target.value;

    this.props.enterText(value);
  };

  handleClick = () => {
    this.props.authUser();
  };

  render() {
    return (
      <div className={styles.popup}>
        <div className={styles.auth}>
          <h1>Your name:</h1>
          <input
            type="text"
            placeholder="Enter name"
            value={this.userName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Go</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { enterText, authUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
