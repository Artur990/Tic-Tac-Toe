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
    <div className="Main">
      <div className="Window">
        <h1>Tera Kolej Gracza: {arr[count]} </h1>
        <div className="playersTurn">
          <h2>{winO} - liczba wygranych gracza O</h2>
          <h2>{winX} - liczba wygranych gracza X</h2>
        </div>
        <div className="Tic-Tac-Toe">
          <button onClick={() => clearTicTacToe()}>New game</button>
          <section className="Tic-Tac-Toe_container">
            {array.map((_, index) => (
              <Square key={index} id={index} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
