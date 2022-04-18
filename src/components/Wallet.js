import React from "react";

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.style}>
        <div>{this.props.name}</div>
        <div>{this.props.blockchain}</div>
        <div>{this.props.address}</div>
      </div>
    );
  }
}

export default Wallet;
