import React, { useState, useEffect } from "react";
import Problems from "./questionData";

var responses = [];
var submitted = false;

for (let i = 0; i < 20; i++) {
  responses.push(0);
}
function resize(arr, newSize, defaultValue) {
  while (newSize > arr.length) arr.push(defaultValue);
  arr.length = newSize;
}
function Content(props) {
  var n = Problems[props.type].length;
  resize(responses, n, 0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (responses[index] === 0) {
      for (let i = 0; i < 4; i++) {
        let radioButton = document.getElementById("id" + index + i);
        radioButton.checked = false;
      }
    } else {
      let indd = responses[index] - 1;
      let radioButton = document.getElementById("id" + index + indd);
      radioButton.checked = true;
    }
    if (submitted) {
      let status = document.getElementById("desc");
      if (Problems[props.type][index].correct === responses[index]) {
        status.innerHTML =
          "Correct answer!" + "   " + Problems[props.type][index].desc;
        status.className = "mt-3 alert alert-success";
      } else if (responses[index] !== 0) {
        status.innerHTML =
          "Incorrect answer!" + "   " + Problems[props.type][index].desc;
        status.className = "mt-3 alert alert-danger";
      } else {
        status.innerHTML =
          "Not Attempted!" + "   " + Problems[props.type][index].desc;
        status.className = "mt-3 alert alert-warning";
      }
    }
  }, [index]);

  const handleNext = () => {
    if (!submitted) {
      for (let i = 0; i < 4; i++) {
        let radioButton = document.getElementById("id" + index + i);
        if (radioButton.checked) {
          responses[index] = i + 1;
          break;
        }
      }
    }
    setIndex((previndex) => previndex + 1);
  };

  const handlePrev = () => {
    if (!submitted) {
      for (let i = 0; i < 4; i++) {
        let radioButton = document.getElementById("id" + index + i);
        if (radioButton.checked) {
          responses[index] = i + 1;
        }
      }
    }
    setIndex((previndex) => previndex - 1);
  };

  const handleClr = () => {
    for (let i = 0; i < 4; i++) {
      let radioButton = document.getElementById("id" + index + i);
      radioButton.checked = false;
    }
    responses[index] = 0;
  };

  const handleSubmit = () => {
    submitted = true;
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("clearbtn").style.display = "none";
    for (let i = 0; i < 4; i++) {
      let radioButton = document.getElementById("id" + index + i);
      if (radioButton.checked) {
        responses[index] = i + 1;
        break;
      }
    }
    let status = document.getElementById("desc");
    status.style.display = "block";
    if (Problems[props.type][index].correct === responses[index]) {
      status.innerHTML =
        "Correct Answer!" + "   " + Problems[props.type][index].desc;
      status.className = "mt-3 alert alert-success";
    } else if (responses[index] !== 0) {
      status.innerHTML =
        "Incorrect Answer!" + "   " + Problems[props.type][index].desc;
      status.className = "mt-3  alert alert-danger";
    } else {
      status.innerHTML =
        "Not Attempted!" + "   " + Problems[props.type][index].desc;
      status.className = "mt-3 alert alert-warning";
    }
  };

  return (
    <div className=" mx-auto text-light">
      <h6 className="text-end text-light mx-2">{"User: " + props.name}</h6>
      <div className="text-center mt-5">
        {responses.map((obj, i) => {
          return (
            <div style={{ display: "inline-block" }}>
              <button
                type="button"
                className="btn btn-danger "
                onClick={() => setIndex(i)}
                style={{
                  backgroundColor: responses[i] ? "#08A40C" : "#FF7000",
                  border: 0 + "px",
                  borderRadius: 15 + "px",
                  fontWeight: "bold",
                }}
              >
                {i + 1}
              </button>
              <a
                style={{
                  fontSize: 20 + "px",
                  fontWeight: "bold",
                  display: i != n - 1 ? "inline-block" : "none",
                }}
              >
                --
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-2 p-5" id="quesform">
        <p id={"status" + index}></p>
        <h1 className="display-6 fw-bold" id={"qid" + index}>
          {Problems[props.type][index].id + 1} .{" "}
          {Problems[props.type][index].question}
        </h1>

        <div className="fs-5 mt-3">
          {Problems[props.type][index].choices.map((obj, i) => {
            return (
              <div className="form-check mt-2" key={i.toString()}>
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="choice"
                    id={"id" + index + i}
                  />
                  {obj}
                </label>
              </div>
            );
          })}
        </div>

        <div
          id={"desc"}
          style={{ display: submitted ? "block" : "none" }}
        ></div>

        <div className="text-center">
          <button
            className="btn btn-warning btn-lg mt-5 me-4 "
            id="clearbtn"
            onClick={handleClr}
          >
            Clear
          </button>
          <button
            className="btn btn-primary btn-lg mt-5 me-4 "
            onClick={handlePrev}
            style={{ display: index ? "inline-block" : "none" }}
          >
            Previous
          </button>

          <button
            className="btn btn-primary btn-lg mt-5 "
            onClick={handleNext}
            style={{
              display: index !== n - 1 ? "inline-block" : "none",
            }}
          >
            Next
          </button>

          <button
            className="btn btn-danger btn-lg mt-5 "
            onClick={handleSubmit}
            id="submitBtn"
            style={{
              display: index === n - 1 && !submitted ? "inline-block" : "none",
            }}
          >
            Submit And See Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
