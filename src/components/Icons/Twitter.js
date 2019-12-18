import React from 'react'

const Twitter = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    height = "100%",
    viewBox = "0 0 42 42",
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
      <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M37,10.7c-1.2,0.5-2.4,0.9-3.8,1.1c1.4-0.8,2.4-2.2,2.9-3.8
        c-1.3,0.8-2.7,1.3-4.2,1.7c-1.2-1.3-2.9-2.2-4.8-2.2c-3.6,0-6.6,3.1-6.6,6.8c0,0.5,0.1,1.1,0.2,1.6c-5.5-0.3-10.3-3-13.5-7.1
        c-0.6,1-0.9,2.2-0.9,3.4c0,2.4,1.2,4.5,2.9,5.7c-1.1,0-2.1-0.3-3-0.9v0.1c0,3.3,2.3,6.1,5.3,6.7C11,23.9,10.4,24,9.8,24
        c-0.4,0-0.8,0-1.2-0.1c0.8,2.7,3.3,4.7,6.1,4.7c-2.2,1.8-5.1,2.9-8.2,2.9c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,3.1,10.1,3.1
        c12.1,0,18.7-10.4,18.7-19.4c0-0.3,0-0.6,0-0.9C35,13.3,36.1,12.1,37,10.7"/>
    </svg>
  );
  
export default Twitter;