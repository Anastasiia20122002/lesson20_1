import "./App.scss";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { awsConfig } from "./awsConfig";
import { useState } from "react";
import Button from "./components/Button/Button";
import UserForm from "./containers/UserForm";
import { bindActionCreators } from "redux";

function App() {
  const [loading, setLoading] = useState(false);
  Amplify.configure(awsConfig);
  async function handlePressSubmit(e) {
    e.preventDefault();

    const UserData = await Auth.signUp({
      username: e.target[0].value,
      password: e.target[1].value,
    });
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }
  return (
    <div className="App">
      <div className="first">MaxMovie</div>
      <div className="second">
        <h1>Welcome back</h1>
      </div>
      <UserForm handlePressSubmit={handlePressSubmit} />
      <div className="sign_up">Forgot Password?</div>
      <div className="fourth">
        Not registered yet? <span className="text"> Sign in</span>
      </div>
      <div className="button">
        <Button disabled={true}>Log in</Button>
      </div>
    </div>
  );
}
export default App;
