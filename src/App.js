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
    axios.post()
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)});
  }

  signUp = (name, email, password, passwordConfirmation) => {
    console.log({name, email, password, passwordConfirmation});
  }

  test = () => {
    console.log('test');
    axios({
      method: 'get',
      url: 'http://localhost:3001/users/me',
      headers: {
        'Authorization': 'f8949ee1-c69b-40b7-a22d-815d123cb838'
      }
    })
    .then(response => console.log(response));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <button onClick={this.test}>Test</button>
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
