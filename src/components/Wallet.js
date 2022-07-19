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
          <div className={`div-center-h | card-basic ${props.style}`}>
            <div className="flex-row-align disperse | card-top ">
              <div className="flex-column | card-info">
                <div>{props.name}</div>
                <div>{props.blockchain}</div>
              </div>
              <div className="flex-column-align | wide-font | card-logo">
                <div>Portal</div>
                <div className="pad-025 | mono-font font-size-s border-round-xs border-thick">
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
          className="margin-2 pad-1 | border-round-s wide-font font-color-white font-size-s | responsive-size info-input"
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
        <div
          className="margin-top-2 margin-bottom-2 div-center-h pad-2 | 
        bg-dark-grey border-round-s border-color-augment mono-font-bold font-color-white text-center responsive-size | mobile-center-div-h"
        >
          <div>Enter a public key in order to generate your Portal Wallet.</div>
        </div>
      </div>
    );
  }
};

export default Wallet;
