import React from 'react';
import BoardComponent from '../Component/board/BoardComponent';
import styles from '../static/css/board.css';

class Board extends React.Component {
    render() {
        return(
            <div className="board_card">
                    <div className="board_title">
                    <h1>Armagyeddon Board</h1>
                    </div>

                    <div className="board_container">
                    <BoardComponent></BoardComponent>
                    </div>
            </div>
        );
    }
}

export default Board;