import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.clearState();
  }

  clearState = () => this.setState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.onSubmit} >
          <div>
            <input 
              type="text" name="name"
              placeholder="Name..."
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <input 
              type="email" name="email"
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
          <div>
            <input 
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password..."
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
              required
            />  
          </div>
          <button type="submit" value="Submit">Sign Up</button>
          <Link to="/" onClick={this.clearState}>Log In</Link>
        </form>
      </div>
      
      
    )
  }
}

export default SignUp;
