import { useState } from "react";
// import "./Tic.css";
import useTicTAc from "../hook/useTicTAc";
import { Tobj } from "../context/context";
import {
  TicTacToeContainerAfter6,
  TicTacToeContainerAfter5,
  TicTacToeContainerAfter4,
  TicTacToeContainerAfter3,
  TicTacToeContainerAfter2,
  TicTacToeContainerAfter1,
  TicTacToeContainerAfter7,
  TicTacToeContainerAfter8,
} from "./ContainerAfter";

const Square = (props: any) => {
  const [state, setState] = useState(false);
  const { obj, globalState, stylee, count, setObj, win } = useTicTAc();
  const arr = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];

  const [stemple, setStemple] = useState<string>("");

  const handlerChange = () => {
    if (obj[`str${props.id}` as keyof Tobj]) {
      return;
    }
    globalState();
    setObj((prevState) => ({
      ...prevState,
      [`str${props.id}`]: arr[count],
    }));
    setState(true);

    if (arr[count] === "X") {
      setStemple("X");
    } else {
      setStemple("Y");
    }
  };
  console.log(win);
  let stemple2 = obj[`str${props.id}` as keyof Tobj];

  const converted = {
    "::before": {
      content: '"O"',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 0,
      transition: "opacity 0.5s ease-in-out",
    },
  };
  return (
    <div className="Tic-Tac-Toe_container-content" onClick={handlerChange}>
      {win === 1 ? <TicTacToeContainerAfter1 /> : ""}
      {win === 2 ? <TicTacToeContainerAfter2 /> : ""}
      {win === 3 ? <TicTacToeContainerAfter3 /> : ""}
      {win === 4 ? <TicTacToeContainerAfter4 /> : ""}
      {win === 5 ? <TicTacToeContainerAfter5 /> : ""}
      {win === 6 ? <TicTacToeContainerAfter6 /> : ""}
      {win === 7 ? <TicTacToeContainerAfter7 /> : ""}
      {win === 8 ? <TicTacToeContainerAfter8 /> : ""}
      {
        <span>
          {stemple2 ? (
            stemple2 === "X" ? (
              <span style={{ color: "#FFBF9B" }}>X</span>
            ) : (
              <span style={{ color: "#FFBF9B" }}>O</span>
            )
          ) : (
            ""
          )}
        </span>
      }
    </div>
  );
};

export default Square;

// Object.assign(obj, { [`str${props.id}`]: arr[count - 1] });
