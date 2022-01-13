import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, onChildChange, childColor }) {
  function handleClick() {
    onChangeColor();
    onChildChange();
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: childColor }}
    />
  );
}

export default Child;
