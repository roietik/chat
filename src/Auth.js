import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { auth, googleProvider } from "./firebase.js";

class Auth extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  handleLogin = () => {
    auth.signInWithPopup(googleProvider);
    console.log("login");
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;
    const { handleLogin } = this;
    return user ? children : <Button onClick={handleLogin}>LogIn</Button>;
  }
}

export default Auth;
