import React from "react";

const pauseButton = {
  marginRight: "10px",
  width: "15px",
  height: "15px",
};

const PauseButtonSVG = () => {
  return (
    <div>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={pauseButton}
      >
        <g>
          <g>
            <path
              fill={"#fff"}
              d="M181.333,0H74.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
              C213.333,14.357,198.976,0,181.333,0z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              fill={"#fff"}
              d="M437.333,0H330.667c-17.643,0-32,14.357-32,32v448c0,17.643,14.357,32,32,32h106.667c17.643,0,32-14.357,32-32V32
              C469.333,14.357,454.976,0,437.333,0z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PauseButtonSVG;
