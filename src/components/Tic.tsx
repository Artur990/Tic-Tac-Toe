import { useState } from "react";
import "./Tic.css";
import useTicTAc from "../hook/useTicTAc";
import { counter } from "../hook/useTicTAc";
const Tic = (props: any) => {
  const [state, setState] = useState(false);
  const { obj, globaState } = useTicTAc();

  const arr = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
  const handlerChange = () => {
    if (state === true) {
      return;
    }
    globaState();
    Object.assign(obj, { [`str${props.id}`]: arr[counter - 1] });
    setState(true);
  };
  return (
    <div className="Tic-Tac-Toe_container-content" onClick={handlerChange}>
      {state ? arr[counter - 1] : ""}
    </div>
  );
};

export default Tic;
