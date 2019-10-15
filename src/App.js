import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import SignUp from './components/SignUp';
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
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </div>
        </div>
      </Router>
    </AdnatState>
  );
};

export default App;
