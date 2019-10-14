import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SignUp from './components/SignUp';
import UserProfile from './components/users/UserProfile';
import AdnatState from './context/adnat/AdnatState';
import './App.css';

const App = () => {
  return (
    <AdnatState>
      <div className='app'>
        <Header />
        {sessionId ? (
          <UserProfile getUserInfo={this.getUserInfo} user={this.state.user} />
        ) : (
          <SignUp signUp={this.signUp} />
        )}
      </div>
    </AdnatState>
  );
};

export default App;
