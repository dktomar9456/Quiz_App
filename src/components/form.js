import React from "react";

function Quiz(props) {
  return (
    <div className="mx-auto mt-5 p-5 text-light" id="form2">
      <form action="submit">
        <div className="mb-3">
          <label for="name" className="form-label">
            <h4>Name</h4>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your name"
            id="userName"
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
            id="quizType"
          >
            <option selected>Open this select menu to choose quiz</option>
            <option value="0">General Knowlwdge</option>
            <option value="1">Java Script</option>
          </select>
        </div>
        <div className="mb-3 text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => props.handleStart()}
          >
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
}
export default Quiz;
