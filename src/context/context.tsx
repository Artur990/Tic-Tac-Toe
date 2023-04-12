import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
export type Tobj = {
  str0: string;
  str1: string;
  str2: string;
  str3: string;
  str4: string;
  str5: string;
  str6: string;
  str7: string;
  str8: string;
};

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  obj: Tobj;
  setObj: React.Dispatch<React.SetStateAction<Tobj>>;
  clearTicTacToe: () => void;
  winX: number;
  winO: number;
  win: number;
};

type TPropsContext = {
  children: React.ReactNode;
};
const CounterContext = createContext<CounterContextType>({
  count: 0,
  winX: 0,
  winO: 0,
  win: 0,
  increment: () => {},
  decrement: () => {},
  clearTicTacToe: () => {},
  obj: {
    str0: "",
    str1: "",
    str2: "",
    str3: "",
    str4: "",
    str5: "",
    str6: "",
    str7: "",
    str8: "",
  },
  setObj: () => [],
});

const CounterProvider = ({ children }: TPropsContext) => {
  const [count, setCount] = useState(0);

  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);

  const incrementWinX = () => setWinX((prevCount) => prevCount + 1);
  const incrementWinO = () => setWinO((prevCount) => prevCount + 1);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const [obj, setObj] = useState<Tobj>({
    str0: "",
    str1: "",
    str2: "",
    str3: "",
    str4: "",
    str5: "",
    str6: "",
    str7: "",
    str8: "",
  });
  const [win, setWin] = useState<number>(0);
  useEffect(() => {
    if (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") {
      //1
      setWin(1);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") {
      //2
      setWin(2);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") {
      //3
      setWin(3);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") {
      //4
      setWin(4);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") {
      //5
      setWin(5);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") {
      //6
      setWin(6);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }

    if (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") {
      //7
      setWin(7);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }
    if (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O") {
      //8
      setWin(8);
      setTimeout(() => {
        alert("O wins!");
        incrementWinO();
        setCount(10);
      }, 1000);
    }

    if (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") {
      //1
      setWin(1);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }
    if (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") {
      //2
      setWin(2);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }
    if (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") {
      //3
      setWin(3);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }

    if (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") {
      //4
      setWin(4);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }
    if (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") {
      //5
      setWin(5);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }
    if (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") {
      //6
      setWin(6);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }

    if (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") {
      //7
      setWin(7);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }
    if (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X") {
      //8
      setWin(8);
      setTimeout(() => {
        alert("X wins!");
        incrementWinX();
        setCount(10);
      }, 1000);
    }

    // if (
    //   (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") ||
    //   (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") ||
    //   (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") ||
    //   (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") ||
    //   (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") ||
    //   (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") ||
    //   (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") ||
    //   (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O")
    // ) {
    //   //   setStylee(true);
    //   setTimeout(() => {
    //     alert("O wins!");
    //     incrementWinX();
    //     setCount(10);
    //   }, 1000);
    // }

    // if (
    //   (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") ||
    //   (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") ||
    //   (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") ||
    //   (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") ||
    //   (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") ||
    //   (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") ||
    //   (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") ||
    //   (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X")
    // ) {
    //   //   setStylee(true);
    //   setTimeout(() => {
    //     alert("X wins!");
    //     incrementWinO();
    //     setCount(10);
    //   }, 1000);
    // }
  }, [obj]);

  const clearTicTacToe = () => {
    setCount(0);
    setObj({
      str0: "",
      str1: "",
      str2: "",
      str3: "",
      str4: "",
      str5: "",
      str6: "",
      str7: "",
      str8: "",
    });
    setWin(0);
  };

  const contextValue = {
    count,
    increment,
    decrement,
    obj,
    setObj,
    clearTicTacToe,
    winX,
    winO,
    win,
  };
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
