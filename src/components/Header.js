import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex-row-align gap-05">
        <div>Portal</div>
        <div className="pad-025 | mono-font font-size-s font-color-tertiary border-round-xs border-color-tertiary border-thick">
          wallet
        </div>
      </div>
    );
  }
}

export default Header;
