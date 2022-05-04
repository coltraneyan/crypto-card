import React from "react";

class Style extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "mono",
    };

    this.handleActive = this.handleActive.bind(this);
  }

  handleActive(value) {
    this.setState({ active: value });
  }

  render() {
    return (
      <div
        className="flex-row-align wide-font font-size-s gap-05 pad-05 margin-2 border-round-xs
        border-color-augment responsive-size bg-block-primary no-select"
      >
        <div
          onClick={() => {
            this.props.updateStyle("mono");
            this.handleActive("mono");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.state.active === "mono" ? "style-active" : ""
          }`}
        >
          Mono
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("neomorphic");
            this.handleActive("neomorphic");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.state.active === "neomorphic" ? "style-active" : ""
          }`}
        >
          Neomorphic
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("gradient");
            this.handleActive("gradient");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.state.active === "gradient" ? "style-active" : ""
          }`}
        >
          Gradient
        </div>
        <div
          onClick={() => {
            this.props.updateStyle("holo");
            this.handleActive("holo");
          }}
          className={`border-round-xs pad-05 border-color-augment ${
            this.state.active === "holo" ? "style-active" : ""
          }`}
        >
          Holo
        </div>
      </div>
    );
  }
}

export default Style;
