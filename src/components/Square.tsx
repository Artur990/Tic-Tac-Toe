import { useState } from "react";
// import "./Tic.css";
import useTicTAc from "../hook/useTicTAc";
import { Tobj } from "../context/context";
import {
  TicTacToeContainerAfter6,
  TicTacToeContainerAfter5,
  TicTacToeContainerAfter4,
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

  return (
    <div className="Tic-Tac-Toe_container-content" onClick={handlerChange}>
      {win === 4 ? <TicTacToeContainerAfter4 /> : ""}
      {win === 5 ? <TicTacToeContainerAfter5 /> : ""}
      {win === 6 ? <TicTacToeContainerAfter6 /> : ""}
      {
        <span>
          {stemple2 ? (
            stemple2 === "X" ? (
              <span style={{ color: "#FFBF9B" }}>X</span>
            ) : (
              <span style={{ color: "#B46060" }}>O</span>
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
