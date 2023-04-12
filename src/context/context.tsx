import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
export type Tobj = {
  [key: string]: string;
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
  const [block, setBlock] = useState<boolean>(true);
  useEffect(() => {
    if (block === true) {
      if (obj.str0 === "O" && obj.str1 === "O" && obj.str2 === "O") {
        //1
        setBlock(false);
        setWin(1);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str3 === "O" && obj.str4 === "O" && obj.str5 === "O") {
        //2
        setBlock(false);
        setWin(2);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str6 === "O" && obj.str7 === "O" && obj.str8 === "O") {
        //3
        setBlock(false);
        setWin(3);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str0 === "O" && obj.str3 === "O" && obj.str6 === "O") {
        //4
        setBlock(false);
        setWin(4);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str1 === "O" && obj.str4 === "O" && obj.str7 === "O") {
        //5
        setBlock(false);
        setWin(5);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str2 === "O" && obj.str5 === "O" && obj.str8 === "O") {
        //6
        setBlock(false);
        setWin(6);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }

      if (obj.str0 === "O" && obj.str4 === "O" && obj.str8 === "O") {
        //7
        setBlock(false);
        setWin(7);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }
      if (obj.str2 === "O" && obj.str4 === "O" && obj.str6 === "O") {
        //8
        setBlock(false);
        setWin(8);
        setTimeout(() => {
          alert("O wins!");
          incrementWinO();
          setCount(10);
        }, 1000);
      }

      if (obj.str0 === "X" && obj.str1 === "X" && obj.str2 === "X") {
        //1
        setBlock(false);
        setWin(1);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (obj.str3 === "X" && obj.str4 === "X" && obj.str5 === "X") {
        //2
        setBlock(false);
        setWin(2);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (obj.str6 === "X" && obj.str7 === "X" && obj.str8 === "X") {
        //3
        setBlock(false);
        setWin(3);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }

      if (obj.str0 === "X" && obj.str3 === "X" && obj.str6 === "X") {
        //4
        setBlock(false);
        setWin(4);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (obj.str1 === "X" && obj.str4 === "X" && obj.str7 === "X") {
        //5
        setBlock(false);
        setWin(5);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (obj.str2 === "X" && obj.str5 === "X" && obj.str8 === "X") {
        //6
        setBlock(false);
        setWin(6);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }

      if (obj.str0 === "X" && obj.str4 === "X" && obj.str8 === "X") {
        //7
        setBlock(false);
        setWin(7);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (obj.str2 === "X" && obj.str4 === "X" && obj.str6 === "X") {
        //8
        setBlock(false);
        setWin(8);
        setTimeout(() => {
          alert("X wins!");
          incrementWinX();
          setCount(10);
        }, 1000);
      }
      if (
        obj.str0 !== "" &&
        obj.str1 !== "" &&
        obj.str2 !== "" &&
        obj.str3 !== "" &&
        obj.str4 !== "" &&
        obj.str5 !== "" &&
        obj.str6 !== "" &&
        obj.str7 !== "" &&
        obj.str8 !== "" &&
        block
      ) {
        //remis
        setBlock(false);
        setTimeout(() => {
          alert("Remis!");
          setCount(10);
        }, 1000);
      }
    }
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
    setBlock(true);
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
