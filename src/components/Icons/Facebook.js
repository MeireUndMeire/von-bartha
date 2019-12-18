import React from 'react'

const Facebook = ({
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
      <rect opacity="0" fill="#FFFFFF" width="42" height="42"/>
      <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M22.1,37H6.8c-1,0-1.8-0.8-1.8-1.8V6.8C5,5.8,5.8,5,6.8,5h28.5
        c1,0,1.8,0.8,1.8,1.8v28.5c0,1-0.8,1.8-1.8,1.8h-8.2V24.6h4.2l0.6-4.8h-4.8v-3.1c0-1.4,0.4-2.4,2.4-2.4l2.6,0V10
        c-0.4-0.1-2-0.2-3.7-0.2c-3.7,0-6.2,2.3-6.2,6.4v3.6h-4.2v4.8h4.2V37z"/>
    </svg>
  );
  
export default Facebook;