import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { awsConfig } from "../../awsConfig";
export default function Button({ disabled, children }) {
  Amplify.configure(awsConfig);
  async function handlePressSubmit(e) {
    e.preventDefault();
    try {
      const UserData = await Auth.signUp({
        username: e.target[0].value,
        password: e.target[1].value,
      });
      console.log(e.target[0].value);
      console.log(e.target[1].value);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      onClick={handlePressSubmit}
      className={`btnWrapper ${disabled ? "btnWrapperDisabled" : ""}`}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.element,
};
