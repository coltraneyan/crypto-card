import "./App.css";
import React from "react";
import InputForm from "./components/InputForm";
import Wallet from "./components/Wallet";

class App extends React.Component {
  constructor(props) {
    super(props);

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
        <InputForm
          updateName={this.updateName}
          updateBlockchain={this.updateBlockchain}
          updateAddress={this.updateAddress}
        />
        <Wallet
          name={this.state.name}
          blockchain={this.state.blockchain}
          address={this.state.address}
        />
      </div>
    );
  }
}

export default App;
