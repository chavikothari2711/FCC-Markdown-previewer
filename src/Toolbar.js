import React from "react";
import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa";

export function Toolbar(props) {
  return (
    <div className="toolBar" style={{ width: props.width, height: 30 }}>
      <FaFreeCodeCamp />
      <span className="text">{props.title}</span>
      <button onClick={props.handle} style={{ left: props.left }}>
        <FaExpandArrowsAlt />
      </button>
    </div>
  );
}
