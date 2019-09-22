import React from "react";
import loader from "../images/output.svg";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="loader bg-light rounded-circle">
        <img src={loader} className="rounded-circle" />
      </div>
    </div>
  );
}
