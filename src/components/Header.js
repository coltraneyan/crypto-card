import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex-row-align disperse pad-2 | wide-font bg-block-primary">
        <div className="flex-row-align gap-05">
          <div>Portal</div>
          <div className="mono-font font-size-s font-color-tertiary border-round-xs border-color-tertiary pad-025">
            wallet
          </div>
        </div>
        <div className="flex-row-align gap-05">
          <div>About</div>
          <div className="box pad-05">
            <u>Save</u>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
