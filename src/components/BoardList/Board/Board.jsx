import React from 'react';
import styles from './Board.module.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateText: false,
            name: this.props.name
        };
    }

    handleChange = (e) => {
        const name = e.target.value;

        this.setState({
            name
        });
    }

    handleClick = () => {
        this.setState({
            updateText: !this.state.updateText
        });
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.updateBoardName(this.state.name, this.props.id);
            this.setState({
                updateText: !this.state.updateText
            });
        }
    }

    render = () => {
        return (
            <div className={styles.board}>
                <p onClick={this.handleClick} className={this.state.updateText ? styles.displayNone : ''}>{this.state.name}</p>
                <input 
                    type="text" 
                    className={!this.state.updateText ? styles.displayNone : ''} 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown} />
            </div>
        );
    }
}

export default Board;