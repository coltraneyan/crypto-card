import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="pad-2 | mono-font remove-styling no-select">
        <form className="flow" spellcheck="false">
          <div className="pad-05 | border-round-s responsive-size | info-input | mobile-center-div-h">
            <input
              type="text"
              placeholder="Wallet Name"
              onChange={(event) => this.props.updateName(event.target.value)}
            />
          </div>
          <div className="pad-05 | font-size-s word-wrap | info-card">
            Ex: Coltrane's Ether
            <br />
            (Do not include any private information)
          </div>
          <div className="pad-05 | border-round-s responsive-size | info-input | mobile-center-div-h">
            <input
              type="text"
              placeholder="Blockchain"
              onChange={(event) =>
                this.props.updateBlockchain(event.target.value)
              }
            />
          </div>
          <div className="pad-05 | font-size-s word-wrap | info-card">
            Ex: Ethereum (ERC-20)
          </div>
          <div className="pad-05 | border-round-s responsive-size | info-input | mobile-center-div-h">
            <input
              type="text"
              placeholder="Public Address"
              onChange={(event) => this.props.updateAddress(event.target.value)}
            />
          </div>
          <div className="pad-05 | font-size-s word-wrap | info-card">
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
