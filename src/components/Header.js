import React from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

class Header extends React.Component {
  render() {
    return (
      <div className="flex-row-align disperse pad-2 | wide-font bg-block-primary">
        <div className="flex-row-align gap-05">
          <div>Portal</div>
          <div className="mono-font font-size-s font-color-tertiary border-round-xs border-color-tertiary border-thick pad-025">
            wallet
          </div>
        </div>
        <div>About</div>
      </div>
    );
  }
}

export default Header;
