import "./App.css";
import React from "react";
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
      <div className={`flex-column fill-height | ${this.state.modal}`}>
        <div className="flex-row-align disperse pad-2 | wide-font bg-blue no-select">
          <Header />
          <About updateModal={this.updateModal} />
        </div>
        <div className="flex-row fill-space | mobile ">
          <div className="flex-column | bg-dark-grey ">
            <Form
              updateName={this.updateName}
              updateBlockchain={this.updateBlockchain}
              updateAddress={this.updateAddress}
            />
            <Style updateStyle={this.updateStyle} style={this.state.style} />
          </div>
          <div className="fill-space | bg-light-grey ">
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
