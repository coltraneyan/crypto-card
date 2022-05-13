import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="mono-font remove-styling pad-2 no-select">
        <form className="flow" spellcheck="false">
          <div className="border-round-s responsive-size pad-05 info-input mobile-center-div-h">
            <input
              type="text"
              placeholder="Wallet Name"
              onChange={(event) => this.props.updateName(event.target.value)}
            />
          </div>
          <div className="info-card pad-05 font-size-s word-wrap">
            Ex: Coltrane's Ether
            <br />
            (Do not include any private information)
          </div>
          <div className="border-round-s responsive-size pad-05 info-input mobile-center-div-h">
            <input
              type="text"
              placeholder="Blockchain"
              onChange={(event) =>
                this.props.updateBlockchain(event.target.value)
              }
            />
          </div>
          <div className="info-card pad-05 font-size-s word-wrap">
            Ex: Ethereum (ERC-20)
          </div>
          <div className="border-round-s responsive-size pad-05 info-input mobile-center-div-h">
            <input
              type="text"
              placeholder="Public Address"
              onChange={(event) => this.props.updateAddress(event.target.value)}
            />
          </div>
          <div className="info-card pad-05 font-size-s word-wrap">
            Ex: 0xb794f5ea0ba39494ce839613fffba74279579268
            <br />
            (Never give out your private key or seed phrase)
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
