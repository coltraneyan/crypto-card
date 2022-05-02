import React from "react";

class Style extends React.Component {
  render() {
    return (
      <div
        onChange={(event) => {
          this.props.updateStyle(event.target.value);
        }}
      >
        <input type="radio" value="mono" name="style" />
        Mono
        <input type="radio" value="neomorphic" name="style" />
        Neomorphic
        <input type="radio" value="gradient" name="style" />
        Gradient
        <input type="radio" value="holo" name="style" />
        Holo
      </div>
    );
  }
}

export default Style;
