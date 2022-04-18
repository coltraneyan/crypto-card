import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Wallet Name"
            onChange={(event) => this.props.updateName(event.target.value)}
          />
          <div>
            Ex: Coltrane's Ether [Do not include any private information]
          </div>
          <input
            type="text"
            placeholder="Blockchain"
            onChange={(event) =>
              this.props.updateBlockchain(event.target.value)
            }
          />
          <div>Ex: Ethereum (ERC-20)</div>
          <input
            type="text"
            placeholder="Public Address"
            onChange={(event) => this.props.updateAddress(event.target.value)}
          />
          <div>
            Ex: 0xb794f5ea0ba39494ce839613fffba74279579268 [Never give out your
            private key or seed phrase!]
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
