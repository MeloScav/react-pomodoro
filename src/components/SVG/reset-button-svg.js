import React from "react";

const resetButton = {
  marginRight: "10px",
  width: "15px",
  height: "15px",
};

const ResetButtonSVG = () => {
  return (
    <div>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512.1 512.1"
        style={resetButton}
      >
        <g>
          <g>
            <g>
              <path
                fill={"#fff"}
                d="M512.075,64.012h-112v112h32v-58.08c31.164,39.269,48.085,87.948,48,138.08
				c0.052,123.765-100.237,224.138-224.002,224.19S31.935,379.966,31.883,256.201S132.12,32.063,255.884,32.011
				c36.968-0.016,73.366,9.115,105.95,26.578l15.168-28.176C252.387-36.374,97.224,10.506,30.437,135.122
				s-19.906,279.779,104.71,346.566s279.779,19.906,346.566-104.71c19.938-37.202,30.368-78.757,30.362-120.966
				c0.117-58.247-19.847-114.754-56.528-160h56.528V64.012z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ResetButtonSVG;
