import "./App.css";
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Style from "./components/Style";
import Wallet from "./components/Wallet";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      blockchain: "",
      address: "",
      style: "",
    };

    this.updateName = this.updateName.bind(this);
    this.updateBlockchain = this.updateBlockchain.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
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

  updateStyle(value) {
    this.setState({ style: value });
  }

  render() {
    return (
      <div className="flex-column">
        <Header />
        <div className="flex-row">
          <div className="flex-column fill-height">
            <Form
              updateName={this.updateName}
              updateBlockchain={this.updateBlockchain}
              updateAddress={this.updateAddress}
            />
            <Style updateStyle={this.updateStyle} />
          </div>
          <div className="wallet-wrapper">
            <Wallet
              name={this.state.name}
              blockchain={this.state.blockchain}
              address={this.state.address}
              style={this.state.style}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
