import React, { useRef, useEffect } from "react";
import InputManager from "./InputManager";

const ReactRogue = ({ width, height, tilesize }) => {
  let InputManager = new InputManager();
  const canvasRef = useRef();
  useEffect(() => {
    console.log("draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRct(0, 0, width * tilesize, height * tilesize);
    ctx.fillStyle = "#000";
    ctx.fillRct(12, 22, 16, 16);
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default ReactRogue;
