import React from "react";

class Style extends React.Component {
  render() {
    return (
      <div
        onChange={(event) => {
          this.props.updateStyle(event.target.value);
        }}
      >
        <input type="radio" value="Mono" name="style" />
        Mono
        <input type="radio" value="Neomorphic" name="style" />
        Neomorphic
        <input type="radio" value="Gradient" name="style" />
        Gradient
        <input type="radio" value="Holo" name="style" />
        Holo
      </div>
    );
  }
}

export default Style;
