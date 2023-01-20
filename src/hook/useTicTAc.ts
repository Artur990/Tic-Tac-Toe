import { useCallback } from "react";

export let counter = 0;
let obj = {
  str0: "",
  str1: "",
  str2: "",
  str3: "",
  str4: "",
  str5: "",
  str6: "",
  str7: "",
  str8: "",
  str9: "",
};
const useTicTAc = () => {
  const globaState = useCallback(() => {
    counter++;
  }, []);

  const winer = useCallback(() => {
    setTimeout(() => {
      alert("Win!!!");
    }, 1000);
  }, []);

  const checkWinner = () => {
    if (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") {
      alert("Win!");
    }
    if (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") {
      winer();
    }
    if (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") {
      winer();
    }
    if (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") {
      winer();
    }
    if (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") {
      winer();
    }
    if (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") {
      winer();
    }

    if (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") {
      winer();
    }
    if (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O") {
      winer();
    }

    if (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") {
      winer();
    }
    if (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") {
      winer();
    }
    if (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") {
      winer();
    }

    if (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") {
      winer();
    }
    if (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") {
      winer();
    }
    if (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") {
      winer();
    }

    if (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") {
      winer();
    }
    if (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X") {
      winer();
    }
  };
  checkWinner();

  return { obj, globaState };
};

export default useTicTAc;
