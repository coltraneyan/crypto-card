import React from "react";

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={this.props.style}></div>;
  }
}

export default Wallet;
