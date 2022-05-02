import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="flex-row disperse | bg-primary wide-font">
        <div className="flex-row">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="10"
                cy="20"
                rx="10"
                ry="20"
                fillOpacity="0"
                stroke="blue"
              />
            </svg>
          </div>
          <div>Portal</div>
        </div>
        <div className="flex-row">
          <div>About</div>
          <div>Save</div>
        </div>
      </div>
    );
  }
}

export default Header;
