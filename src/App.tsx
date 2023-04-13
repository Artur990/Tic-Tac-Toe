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
        <h1>
          Tera Kolej Gracza:
          <span style={{ color: "#00ADB5", fontWeight: "700" }}>
            {" "}
            {arr[count]}{" "}
          </span>
        </h1>
        <div className="playersTurn">
          <div className="totatl-results">
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
          <div className="totatl-results">
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
        <div className="Tic-Tac-Toe">
          <section className="Tic-Tac-Toe_container">
            {array.map((_, index) => (
              <Square key={index} id={index} />
            ))}
          </section>
        </div>
        <div className="contnet-Btn">
          <button className="Btn" onClick={() => clearTicTacToe()}>
            New game
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
