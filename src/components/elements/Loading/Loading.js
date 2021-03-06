import * as React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: 'auto',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width="50"
        height="50"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          strokeWidth="8"
          strokeDasharray="31.41592653589793 31.41592653589793"
          fill="none"
          strokeLinecap="round"
          className="loader"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.4285714285714284s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
