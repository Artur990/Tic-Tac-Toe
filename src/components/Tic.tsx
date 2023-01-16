import React, { useState } from "react";
import "./Tic.css";
import useTicTAc from "../hook/useTicTAc";

const Tic = (props: any) => {
  const [state, setState] = useState(false);
  const { fun, obj } = useTicTAc();

  const arr = ["", "X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
  const handlerChange = async () => {
    console.log(props.id + 1, arr[props.id + 1]);
    Object.assign(obj, { [`str${props.id}`]: arr[fun() + 0.75] });
    setState(true);
    console.log(fun() + "sssssssss");
  };

  return (
    <div className="Tic-Tac-Toe_container-content" onClick={handlerChange}>
      {state ? arr[fun()] : ""}
    </div>
  );
};

export default Tic;
