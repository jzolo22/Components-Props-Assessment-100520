import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from "./Containers/NotesContainer";

class App extends Component {
  render() {
    let header = "Hello World"
    return (
      <>
        <Header text={header} />
        <NotesContainer  />
      </>
    )
  }
}

export default App;
