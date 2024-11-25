import { useEffect, useState } from "react";
import Square from "./Square";
import Congratulations from "./Congratulations";

export default function App() {
  const [isFlag, setIsFlag] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  console.log(winner);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setIsFlag(true);
      setSquares(Array(9).fill(null));
    }
  }, [squares]);
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  console.log(squares);
  return (
    <>
      {isFlag ? (
        <Congratulations setIsFlag={setIsFlag} />
      ) : (
        <div className="ml-[40rem] mt-52">
          {status}
          <div className="flex">
            <Square value={squares[0]} onHandleClick={() => handleClick(0)} />
            <Square value={squares[1]} onHandleClick={() => handleClick(1)} />
            <Square value={squares[2]} onHandleClick={() => handleClick(2)} />
          </div>
          <div className="flex">
            <Square value={squares[3]} onHandleClick={() => handleClick(3)} />
            <Square value={squares[4]} onHandleClick={() => handleClick(4)} />
            <Square value={squares[5]} onHandleClick={() => handleClick(5)} />
          </div>
          <div className="flex">
            <Square value={squares[6]} onHandleClick={() => handleClick(6)} />
            <Square value={squares[7]} onHandleClick={() => handleClick(7)} />
            <Square value={squares[8]} onHandleClick={() => handleClick(8)} />
          </div>
        </div>
      )}
    </>
  );
}
