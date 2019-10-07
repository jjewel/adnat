import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import "./App.css";

class App extends Component {
  state = {
    sessionId: "",
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  signUp = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    };

    const request = {
      method: "post",
      url: "http://localhost:3001/auth/signup",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    axios(request)
      .then(response => this.setState({ sessionId: response.data.sessionId }))
      .catch(error => alert(error));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <SignUp
          signUp={this.signUp}
          name={this.state.name}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
