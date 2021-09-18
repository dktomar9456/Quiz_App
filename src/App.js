import React, { Component } from "react";
import Navbar from "./components/navbar";
import Quiz from "./components/form";
import Content from "./components/content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: <Quiz handleStart={this.setStart} />,
    };
    this.setStart = this.setStart.bind(this);
  }
  setStart = () => {
    this.setState({ content: <Content /> });
  };
  render() {
    return (
      <div>
        <Navbar />
        {this.state.content}
      </div>
    );
  }
}

export default App;
