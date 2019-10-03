import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import './App.css';

export class App extends Component {
  state = {
    sessionId: ""
  }

  logIn = (email, password) => {
    axios.post(
      'http://localhost:3000/auth/login', 
      {email, password}, 
      {headers: {'Content-Type': 'application/json'}}
    )
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)});
  }

  signUp = (name, email, password, passwordConfirmation) => {
    console.log({name, email, password, passwordConfirmation});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route
            exact 
            path="/"
            render={props => (
              <React.Fragment>      
                <LogIn logIn={this.logIn} />
              </React.Fragment>
            )}
          />
          <Route
            exact 
            path="/signup"
            render={props => (
              <React.Fragment>
                <SignUp signUp={this.signUp} />
              </React.Fragment>
            )}
          />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
