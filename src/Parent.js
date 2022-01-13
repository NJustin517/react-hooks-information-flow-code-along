import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeChildColor() {
    const newRandomColor = getRandomColor();
    setChildrenColor(newRandomColor);
  }

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child
        onChangeColor={handleChangeColor}
        onChildChange={handleChangeChildColor}
        childColor={childrenColor}
      />
      <Child
        onChangeColor={handleChangeColor}
        onChildChange={handleChangeChildColor}
        childColor={childrenColor}
      />
    </div>
  );
}

export default Parent;
