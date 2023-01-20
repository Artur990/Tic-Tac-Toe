import "./App.css";
import Tic from "./components/Tic";

const App = () => {
  const array = [...Array(9)];

  return (
    <div className="Tic-Tac-Toe">
      <button onClick={() => document.location.reload()}>New game</button>
      <div className="Tic-Tac-Toe_container">
        {array.map((_, index) => (
          <Tic key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
