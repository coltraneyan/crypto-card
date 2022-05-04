import React from "react";
import { QRCodeSVG } from "qrcode.react";

class Wallet extends React.Component {
  render() {
    if (this.props.address) {
      return (
        <div
          className={`card-basic div-center-h margin-top-2 ${this.props.style}`}
        >
          <div className="card-top">
            <div>{this.props.name}</div>
            <div>{this.props.blockchain}</div>
          </div>
          <div className="card-bottom">
            <div className="card-address">{this.props.address}</div>
            <div className="card-QR">
              <QRCodeSVG value={this.props.address} size={70} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`card-basic div-center-h margin-top-2 ${this.props.style}`}
        >
          <div>{this.props.name}</div>
          <div>{this.props.blockchain}</div>
          <div>{this.props.address}</div>
        </div>
      );
    }
  }
}

export default Wallet;
