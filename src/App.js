import "./App.css";
import React from "react";
import InputForm from "./components/InputForm";
import Wallet from "./components/Wallet";

class App extends React.Component {
  render() {
    return (
      <div>
        <InputForm />
        <Wallet style={"page"} />
      </div>
    );
  }
}

export default App;
