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
      <div className="pad-2 | bg-dark-grey border-round-s border-color-augment font-color-white font-size-s | modal">
        <div className="flex-row-align disperse">
          <div className="mono-font-bold"> Welcome to Portal Wallet. </div>
          <button
            className="remove-styling border-round-s | modal-button"
            onClick={close}
          >
            &times;
          </button>
        </div>
        <div className="pad-2 | mono-font-bold ">
          - We use public crypto wallet keys to generate a "WYSIWYG" info card
          to display your address and recieve payments.
          <br></br>
          <br></br>- We do not store or view any of your information. Once the
          session is closed, any inputs entered will be removed.
        </div>
      </div>
    )}
  </Popup>
);

export default About;
