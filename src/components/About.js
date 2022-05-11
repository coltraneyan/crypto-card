import React from "react";
import Popup from "reactjs-popup";

const About = (props) => (
  <Popup
    trigger={<div>About</div>}
    modal
    nested
    defaultOpen={true}
    onOpen={() => {
      props.updateModal("modal-open");
    }}
    onClose={() => {
      props.updateModal("");
    }}
  >
    {(close) => (
      <div className="bg-block-primary border-round-s font-color-white pad-2 border-color-augment modal text-center">
        <div className="flex-row-align disperse">
          <div className="wide-font"> About </div>
          <button
            className="remove-styling border-round-s modal-button"
            onClick={close}
          >
            &times;
          </button>
        </div>
        <div className="mono-font pad-2">
          Welcome to Portal Wallet!
          <br></br>
          <br></br>
          Using the public key attached to your cryptocurrency wallet, Portal
          Wallet will generate a "WYSIWYG" info card to display your address and
          recieve payments.
          <br></br>
          <br></br>
          We do not store or view any of your information. Once the session is
          closed, any inputs entered will be removed.
        </div>
      </div>
    )}
  </Popup>
);

export default About;
