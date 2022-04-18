import React from "react";
import { QRCodeSVG } from "qrcode.react";

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.address) {
      return (
        <div className={`card-basic ${this.props.style}`}>
          <div>{this.props.name}</div>
          <div>{this.props.blockchain}</div>
          <div>{this.props.address}</div>
          <QRCodeSVG value={this.props.address} />
        </div>
      );
    } else {
      return (
        <div className={`card-basic ${this.props.style}`}>
          <div>{this.props.name}</div>
          <div>{this.props.blockchain}</div>
          <div>{this.props.address}</div>
        </div>
      );
    }
  }
}

export default Wallet;
