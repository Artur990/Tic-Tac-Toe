import "./App.css";
import Tic from "./components/Tic";

const App = () => {
  let array = [...Array(9)];
  return (
    <div className="Tic-Tac-Toe">
      <div className="Tic-Tac-Toe_container">
        {array.map((e, index) => {
          return <Tic key={index} id={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
