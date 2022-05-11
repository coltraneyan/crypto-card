import "./App.css";
import React, { createRef } from "react";
import About from "./components/About";
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
      style: "mono",
      modal: "modal-open",
    };

    this.updateName = this.updateName.bind(this);
    this.updateBlockchain = this.updateBlockchain.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updateModal = this.updateModal.bind(this);
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

  updateModal(value) {
    this.setState({ modal: value });
    console.log(this.state.modal);
  }

  render() {
    return (
      <div className={`flex-column ${this.state.modal}`}>
        <div className="flex-row-align disperse pad-2 | wide-font bg-block-primary no-select">
          <Header />
          <About updateModal={this.updateModal} />
        </div>
        <div className="flex-row">
          <div className="bg-dark-grey flex-column fill-height">
            <Form
              updateName={this.updateName}
              updateBlockchain={this.updateBlockchain}
              updateAddress={this.updateAddress}
            />
            <Style updateStyle={this.updateStyle} style={this.state.style} />
          </div>
          <div className="bg-dark fill-width">
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
