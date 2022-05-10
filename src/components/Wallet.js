import React from "react";
import { QRCodeSVG } from "qrcode.react";

class Wallet extends React.Component {
  render() {
    if (this.props.address) {
      return (
        <div
          className={`card-basic div-center-h margin-top-2 ${this.props.style}`}
        >
          <div className="card-top flex-row-align disperse">
            <div className="flex-column card-info">
              <div>{this.props.name}</div>
              <div>{this.props.blockchain}</div>
            </div>
            <div className="flex-column-align wide-font card-logo">
              <div>Portal</div>
              <div className="mono-font font-size-s border-round-xs border-thick pad-025">
                wallet
              </div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-address">{this.props.address}</div>
            <div className="card-QR-wrapper">
              <QRCodeSVG
                className="card-QR"
                value={this.props.address}
                size={60}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="div-center-h margin-top-2 pad-2 border-color-augment bg-dark-grey border-round-s responsive-size mono-font-bold font-color-white">
          <div>Enter a public key in order to generate your Portal Wallet.</div>
        </div>
      );
    }
  }
}

export default Wallet;
