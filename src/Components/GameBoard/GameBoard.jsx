import React, { useState } from 'react'
import Square from '../Square/Square'
import "./GameBoard.css"

const GameBoard = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [Xturn , setXTurn] = useState(true);

    const checkWin = () => {
        const winningConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    
        for (let logic of winningConditions){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c])
                return state[a];
        }

        return false;
    }
    
    const isWinner = checkWin();

    const handlelick = (index) => {
        if(state[index !== null]){
            return;
        }

        const copyState = [...state];
        copyState[index] = Xturn ? "X" : "O";
        setState(copyState);
        setXTurn(!Xturn);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }
  return (
    <div className="container">
        { isWinner ? ( 
            <>{isWinner} won the game <button onClick={handleReset}>Play Again</button> </> 
        ) : ( 
        <>
        <h4>Player {Xturn ? "X" : "O"} Make the move </h4>
        <div className="board-row">
           <Square onClick={() => handlelick(0) } value={state[0]} /> 
           <Square onClick={() => handlelick(1) } value={state[1]} /> 
           <Square onClick={() => handlelick(2) } value={state[2]} /> 
        </div>
        <div className="board-row">
           <Square onClick={() => handlelick(3) } value={state[3]} /> 
           <Square onClick={() => handlelick(4) } value={state[4]} /> 
           <Square onClick={() => handlelick(5) } value={state[5]} /> 
        </div>
        <div className="board-row">
           <Square onClick={() => handlelick(6) } value={state[6]} /> 
           <Square onClick={() => handlelick(7) } value={state[7]} /> 
           <Square onClick={() => handlelick(8) } value={state[8]} /> 
        </div>
        </>)}
    </div>
  )
}

export default GameBoard