import React from "react";
import Popup from "reactjs-popup";

class Header extends React.Component {
  render() {
    return (
      <div className="flex-row-align gap-05">
        <div>Portal</div>
        <div className="mono-font font-size-s font-color-tertiary border-round-xs border-color-tertiary border-thick pad-025">
          wallet
        </div>
      </div>
    );
  }
}

export default Header;
