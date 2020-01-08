import React from 'react'

const Arrow = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    height = "100%",
    viewBox="0 0 90 72.8",
    x="0px",
    y="0px"
  }) => (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon fill="#1D1D1B" points="90,34.4 7.7,34.4 39.2,2.8 36.4,0 0,36.4 36.4,72.8 39.2,70 7.7,38.4 90,38.4 "/>
    </svg>
  );
  
export default Arrow;