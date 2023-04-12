// import { useCallback, useState } from "react";

// export let counter = 0;
// let obj = {
//   str0: "",
//   str1: "",
//   str2: "",
//   str3: "",
//   str4: "",
//   str5: "",
//   str6: "",
//   str7: "",
//   str8: "",
//   str9: "",
// };
// const useTicTAc = () => {
//   const globalState = useCallback(() => {
//     counter++;
//   }, []);

//   const winer = useCallback(() => {
//     setTimeout(() => {
//       alert("Win!!!");
//     }, 1000);
//   }, []);
//   const [stylee, setStyle] = useState<any>(false);

//   const checkWinner = () => {
//     if (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") {
//       //1
//       setStyle(true);
//       console.log("hej");
//       alert("Win1!");
//     }
//     if (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") {
//       //2
//       winer();
//     }
//     if (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") {
//       //3
//       winer();
//     }
//     if (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") {
//       //4
//       winer();
//     }
//     if (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") {
//       //5
//       winer();
//     }
//     if (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") {
//       //6
//       winer();
//     }

//     if (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") {
//       //7
//       winer();
//     }
//     if (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O") {
//       //8
//       winer();
//     }

//     if (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") {
//       //1
//       winer();
//     }
//     if (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") {
//       //2
//       winer();
//     }
//     if (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") {
//       //3
//       winer();
//     }

//     if (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") {
//       //4
//       winer();
//     }
//     if (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") {
//       //5
//       winer();
//     }
//     if (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") {
//       //6
//       winer();
//     }

//     if (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") {
//       //7
//       winer();
//     }
//     if (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X") {
//       //8
//       winer();
//     }
//   };
//   checkWinner();

//   return { obj, globalState, stylee };
// };

// export default useTicTAc;

import { useCallback, useState } from "react";
import { useCounter } from "../context/context";
const useTicTac = () => {
  const { count, increment, obj, setObj, win } = useCounter();

  console.log(obj);
  const [stylee, setStylee] = useState(false);

  const checkWinner = useCallback(() => {
    if (
      (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") ||
      (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") ||
      (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") ||
      (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") ||
      (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") ||
      (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") ||
      (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") ||
      (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O")
    ) {
      setStylee(true);
      setTimeout(() => {
        alert("O wins!");
      }, 1000);
    } else if (
      (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") ||
      (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") ||
      (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") ||
      (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") ||
      (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") ||
      (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") ||
      (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") ||
      (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X")
    ) {
      setStylee(true);
      setTimeout(() => {
        alert("X wins!");
      }, 1000);
    }
  }, [obj]);

  const globalState = useCallback(() => {
    increment();
  }, []);
  return { obj, globalState, stylee, checkWinner, count, setObj, win };
};

export default useTicTac;
