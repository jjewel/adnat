import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import UserProfile from './components/users/UserProfile';
import AdnatState from './context/adnat/AdnatState';
import './App.css';

const App = () => {
  return (
    <AdnatState>
      <Router>
        <div className='app'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Header} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/login' component={LogIn} />
              <Route exact path='/user/:login' component={UserProfile} />
            </Switch>
            <UserProfile getUserInfo={getUserInfo} user={user} />
            <SignUp signUp={signUp} />
          </div>
        </div>
      </Router>
    </AdnatState>
  );
};

export default App;
