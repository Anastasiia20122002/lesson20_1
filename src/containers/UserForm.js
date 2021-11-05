import React from "react";
import "./styles.scss";
export default function UserForm({ handlePressSubmit }) {
  return (
    <div>
      <div className="image">
        <input placeholder="Email"></input>
        <div className="wrapper">
          <hr className="line" />
        </div>
        <input placeholder="Password"></input>
        <div className="wrapper">
          <hr className="line" />
        </div>
      </div>
    </div>
  );
}
