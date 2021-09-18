import React, { Component } from "react";

class Quiz extends Component {
  render() {
    return (
      <div className="w-50 mx-auto mt-5 p-4 text-light" id="form2">
        <form action="submit">
          <div className="mb-3">
            <label for="name" className="form-label">
              <h4>Name</h4>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              <h4>Email</h4>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your email"
              id="email"
            />
          </div>
          <div className="mb-5">
            <label for="quizs" className="form-label">
              <h4>Choose the Quiz</h4>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="quiz"
            >
              <option selected>Open this select menu to choose quiz</option>
              <option value="1">General Knowlwdge</option>
              {/* <option value="2">HTML</option>
              <option value="3">Java Script</option> */}
            </select>
          </div>
          <div className="mb-3 text-center">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => this.props.handleStart()}
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Quiz;
