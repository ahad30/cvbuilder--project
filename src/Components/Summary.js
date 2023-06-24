import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Summary() {
  return (
    <form>
      <div className="container form-group mt-5 fs-3">
        <h3 className="mb-4 font-weight-bold">Career Objective</h3>
        <textarea className="form-control" id="message" ></textarea>
        <div className="text-left">
        <button className="btn btn-warning font-weight-bold mt-3" type="submit">
          Submit
        </button>
      </div>
      </div>
    </form>
  );
}

export default Summary;