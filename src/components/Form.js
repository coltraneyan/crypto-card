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
          <select
            name="Blockchain"
            onChange={(event) =>
              this.props.updateBlockchain(event.target.value)
            }
          >
            <option value="empty"></option>
            <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
            <option value="Ethereum (ETH)">Ethereum (ETH)</option>
            <option value="Binance (BNB)">Binance (BNB)</option>
          </select>
          <input
            type="text"
            placeholder="Public Address"
            onChange={(event) => this.props.updateAddress(event.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
