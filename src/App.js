import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SignUp from './components/SignUp';
import UserProfile from './components/users/UserProfile';
import './App.css';

class App extends Component {
  state = {
    sessionId: '',
    user: {}
  };

  signUp = (name, email, password, passwordConfirmation) => {
    const request = {
      method: 'post',
      url: `${process.env.REACT_APP_API_HOST}/auth/signup`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name,
        email,
        password,
        passwordConfirmation
      }
    };

    axios(request)
      .then(response => this.setState({ sessionId: response.data.sessionId }))
      .catch(response => alert(response));
  };

  getUserInfo = () => {
    const request = {
      method: 'get',
      url: `${process.env.REACT_APP_API_HOST}/users/me`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.state.sessionId}`
      }
    };

    axios(request)
      .then(response =>
        this.setState({
          user: {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            organisationId: response.data.organisationId
          }
        })
      )
      .catch(response => alert(response));
  };

  render() {
    return (
      <div className='app'>
        <Header />
        {this.state.sessionId ? (
          <UserProfile getUserInfo={this.getUserInfo} user={this.state.user} />
        ) : (
          <SignUp signUp={this.signUp} />
        )}
      </div>
    );
  }
}

export default App;
