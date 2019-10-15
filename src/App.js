import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import LogIn from './components/LogIn';
import AdnatState from './context/adnat/AdnatState';
import './App.css';

const App = () => {
  return (
    <AdnatState>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={LogIn} />
            </Switch>
          </div>
        </div>
      </Router>
    </AdnatState>
  );
};

export default App;
