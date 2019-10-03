import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
    this.clearState();
  }

  clearState = () => this.setState({
    email: '',
    password: ''
  });

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.onSubmit} >
          <div>
            <input 
              type="email"
              name="email"
              placeholder="Email..."
              value={this.state.email}
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <input 
              type="password"
              name="password"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.onChange}
              required
            />  
          </div>
          <button type="submit" value="Submit">Log In</button>
          <Link to="/signup" onClick={this.clearState}>Sign Up</Link>
        </form>
      </div>
      
      
    )
  }
}

export default LogIn;
