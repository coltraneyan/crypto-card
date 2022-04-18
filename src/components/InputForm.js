import React from "react";
import Wallet from "./Wallet";

class InputForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      blockchain: "",
      address: "",
    };

    this.updateName = this.updateName.bind(this);
    this.updateBlockchain = this.updateBlockchain.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  updateName(value) {
    this.setState({
      name: value,
    });
  }

  updateBlockchain(value) {
    this.setState({
      blockchain: value,
    });
  }

  updateAddress(value) {
    this.setState({
      address: value,
    });
  }

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Wallet Name"
            onChange={(event) => this.updateName(event.target.value)}
          />
          <select
            name="Blockchain"
            onChange={(event) => this.updateBlockchain(event.target.value)}
          >
            <option value="empty"></option>
            <option value="Bitcoin (BTC)">Bitcoin (BTC)</option>
            <option value="Ethereum (ETH)">Ethereum (ETH)</option>
            <option value="Binance (BNB)">Binance (BNB)</option>
          </select>
          <input
            type="text"
            placeholder="Public Address"
            onChange={(event) => this.updateAddress(event.target.value)}
          />
        </form>
        <Wallet
          style={"page"}
          name={this.state.name}
          blockchain={this.state.blockchain}
          address={this.state.address}
        />
      </div>
    );
  }
}

export default InputForm;
