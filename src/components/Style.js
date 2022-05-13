import React from "react";

class Style extends React.Component {
  render() {
    return (
      <div
        className="flex-row-align wide-font font-size-s gap-05 pad-05 margin-2 border-round-xs
        border-color-augment responsive-size bg-block-primary no-select mobile-center-div-h"
      >
        <div
          onClick={() => {
            this.props.updateStyle("mono");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.props.style === "mono" ? "style-active" : ""
          }`}
        >
          Mono
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("neomorphic");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.props.style === "neomorphic" ? "style-active" : ""
          }`}
        >
          Neomorphic
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("gradient");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.props.style === "gradient" ? "style-active" : ""
          }`}
        >
          Gradient
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("holo");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
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
