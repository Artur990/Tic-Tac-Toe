import { useState } from "react";
// import "./Tic.css";
import useTicTAc from "../hook/useTicTAc";
import { Tobj } from "../context/context";
import TicTacToeLine from "./ContainerAfter";

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
      {win === 1 && (
        <TicTacToeLine
          top="15%"
          right="10%"
          left="5%"
          width="90%"
          height="6px"
        />
      )}
      {win === 2 && (
        <TicTacToeLine
          top="49%"
          right="10%"
          left="5%"
          width="90%"
          height="6px"
        />
      )}
      {win === 3 && (
        <TicTacToeLine
          top="83%"
          right="10%"
          left="5%"
          width="90%"
          height="6px"
        />
      )}
      {win === 4 && (
        <TicTacToeLine
          top="5%"
          left="14%"
          width="6px"
          height="90%"
          transform="translateX(50%)"
        />
      )}
      {win === 5 && (
        <TicTacToeLine
          top="5%"
          right="51%"
          width="6px"
          height="90%"
          transform="translateX(50%)"
        />
      )}
      {win === 6 && (
        <TicTacToeLine
          top="5%"
          right="17%"
          width="6px"
          height="90%"
          transform="translateX(50%)"
        />
      )}
      {win === 7 && (
        <TicTacToeLine
          top="-30px"
          right="50%"
          width="6px"
          height="120%"
          transform="translateX(50%) rotate(-45deg)"
        />
      )}
      {win === 8 && (
        <TicTacToeLine
          top="-30px"
          left="50%"
          width="6px"
          height="120%"
          transform="translateX(-50%) rotate(45deg)"
        />
      )}
      {
        <span>
          {stemple2 ? (
            stemple2 === "X" ? (
              <span style={{ color: "#00ADB5" }}>X</span>
            ) : (
              <span style={{ color: "#00ADB5" }}>O</span>
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
