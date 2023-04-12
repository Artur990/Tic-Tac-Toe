import "./App.css";
import Square from "./components/Square";
import { CounterProvider, useCounter } from "./context/context";
import useTicTAc from "./hook/useTicTAc";
const App = () => {
  const { stylee } = useTicTAc();
  const array = [...Array(9)];
  const { clearTicTacToe, winO, winX, count } = useCounter();
  const arr = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
  return (
    <div>
      <h1>Tera Kolej Gracza: {arr[count]} </h1>
      <div>
        <div>{winO} - Wygtanych gracza O</div>
        <div>{winX} - Wygtanych gracza X</div>
      </div>
      <div className="Tic-Tac-Toe">
        <button onClick={() => clearTicTacToe()}>New game</button>
        <span className="Tic-Tac-Toe_container">
          {array.map((_, index) => (
            <Square key={index} id={index} />
          ))}
        </span>
      </div>
    </div>
  );
};

export default App;
