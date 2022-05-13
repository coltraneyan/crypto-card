import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { exportComponentAsJPEG } from "react-component-export-image";
import html2canvas from "html2canvas";

const Wallet = (props) => {
  const walletRef = useRef();

  if (props.address) {
    return (
      <div className="flex-column-align">
        <div ref={walletRef} className="div-center-h margin-top-2 pad-2">
          <div className={`card-basic div-center-h ${props.style}`}>
            <div className="card-top flex-row-align disperse">
              <div className="flex-column card-info">
                <div>{props.name}</div>
                <div>{props.blockchain}</div>
              </div>
              <div className="flex-column-align wide-font card-logo">
                <div>Portal</div>
                <div className="mono-font font-size-s border-round-xs border-thick pad-025">
                  wallet
                </div>
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-address">{props.address}</div>
              <div className="card-QR-wrapper">
                <QRCodeSVG
                  className="card-QR"
                  value={props.address}
                  size={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="margin-2 border-round-s responsive-size pad-1 info-input font-color-white wide-font font-size-s"
          onClick={() =>
            exportComponentAsJPEG(walletRef, {
              html2CanvasOptions: {
                backgroundColor: "#303030",
                scale: 2 * window.devicePixelRatio,
              },
            })
          }
        >
          Download Wallet
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="div-center-h margin-2 pad-2 border-color-augment bg-dark-grey border-round-s responsive-size mono-font-bold font-color-white">
          <div>Enter a public key in order to generate your Portal Wallet.</div>
        </div>
      </div>
    );
  }
};

export default Wallet;
