import React, {useState} from 'react';
import Square from './Square';


const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    const handleClick = (i) => {

        if (squares[i] || calculateWinner(squares)) return ;
        const nextSquares = squares.slice();
        if (isXTurn === true) nextSquares[i] = 'X';
        else nextSquares[i] = 'O'

        setIsXTurn(!isXTurn);
        setSquares(nextSquares);

        const winner = calculateWinner(nextSquares);
        if (winner) {
            setStatus("Winner: " + winner)
        } else {
            setStatus("Next player: " + (isXTurn === true ? 'X' : 'O'));
        }
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i ++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
                return squares[a];
            }
        }
    }

    return (
        <>
            <div className='w-[150px] h-[50px] flex items-center justify-around rounded-lg shadow-md'>
                {status}
            </div>
            <div className='flex flex-col'>
                <div className='w-[310px] flex justify-between mb-[5px]'>
                    <Square value={squares[0]} onSqureClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSqureClick={() => handleClick(1)}/>
                    <Square value={squares[2]} onSqureClick={() => handleClick(2)}/>
                </div>
                <div className='w-[310px] flex justify-between mb-[5px]'>
                    <Square value={squares[3]} onSqureClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSqureClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSqureClick={() => handleClick(5)}/>
                </div>
                <div className='w-[310px] flex justify-between'>
                    <Square value={squares[6]} onSqureClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSqureClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSqureClick={() => handleClick(8)}/>
                </div>
            </div>
        </>
        
    )
}

export default Board