import React from "react";

const TicTacToeLine = ({
  top,
  right,
  bottom,
  left,
  width,
  height,
  transform,
}: any) => {
  return (
    <span
      style={{
        content: "",
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height,
        backgroundColor: "#393e46",
        transform: transform,
      }}
    />
  );
};
export default TicTacToeLine;
