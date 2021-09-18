import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark text-light bg-dark">
        <h2 className="mx-auto fw-bold">
          <span className="text-warning">Quiz</span> App
        </h2>
      </nav>
    );
  }
}
export default Navbar;
