import React from "react";

class Style extends React.Component {
  render() {
    return (
      <div
        className="flex-row-align gap-05 pad-05 margin-2 | bg-blue wide-font font-size-s border-round-xs
        border-color-augment responsive-size no-select | mobile mobile-center-div-h"
      >
        <div
          onClick={() => {
            this.props.updateStyle("mono");
          }}
          className={`pad-05 | border-round-xs border-color-augment | ${
            this.props.style === "mono" ? "style-active" : ""
          }`}
        >
          Mono
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("neomorphic");
          }}
          className={`pad-05 | border-round-xs border-color-augment | ${
            this.props.style === "neomorphic" ? "style-active" : ""
          }`}
        >
          Neomorphic
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("gradient");
          }}
          className={`pad-05 | border-round-xs border-color-augment | ${
            this.props.style === "gradient" ? "style-active" : ""
          }`}
        >
          Gradient
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("holo");
          }}
          className={`pad-05 | border-round-xs border-color-augment | ${
            this.props.style === "holo" ? "style-active" : ""
          }`}
        >
          Holo
        </div>
      </div>
    );
  }
}

export default Style;
