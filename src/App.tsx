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
    <div className="Content">
      <div className="Content__container">
        <h1 className="Content__container-title">
          Tera Kolej Gracza:
          <span style={{ color: "#00ADB5", fontWeight: "700" }}>
            {" "}
            {arr[count]}{" "}
          </span>
        </h1>
        <div className="Content__container-playersTurn">
          <div className="Content__container-playersTurn-totatl-results">
            O{" "}
            <span
              style={{
                color: "#00ADB5",
                fontWeight: "700",
                fontSize: "1.6rem",
              }}
            >
              {winO}{" "}
            </span>
          </div>
          <div className="Content__container-playersTurn-totatl-results">
            X{" "}
            <span
              style={{
                color: "#00ADB5",
                fontWeight: "700",
                fontSize: "1.6rem",
              }}
            >
              {winX}
            </span>{" "}
          </div>
        </div>
        <div className="Content__container-Tic-Tac-Toe">
          <div className="Content__container-Tic-Tac-Toe-container">
            {array.map((_, index) => (
              <Square key={index} id={index} />
            ))}
          </div>
        </div>
        <div className="Content__container-Btn-content">
          <button
            className="Content__container-Btn-content-Btn"
            onClick={() => clearTicTacToe()}
          >
            New game
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
