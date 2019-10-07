import React from 'react';
import styles from './Popup.module.css'

class Popup extends React.Component {
    handleChange = e => {
        const userName = e.target.value;

        this.props.setUserName(userName);
    }

    handleClick = () => {
        this.props.setAuth(true);
    }

    render() {
        return (
            <div className={styles.popup}>
                <div className={styles.auth}>
                    <h1>Your name:</h1>
                    <input type="text" placeholder="Enter name" value={this.userName} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Go</button>
                </div>
                
            </div>
        );
    }
}

export default Popup;