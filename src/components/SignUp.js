import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  };

  static propTypes = {
    signUp: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.passwordConfirmation
    );
  };

  render() {
    return (
      <div className='signup-container'>
        <h2>New User</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='email'
            placeholder='Email...'
            name='email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          <input
            type='text'
            placeholder='Full Name...'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
          />
          <br />
          <input
            type='password'
            placeholder='Password...'
            name='password'
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <input
            type='password'
            placeholder='Confirm Password...'
            name='passwordConfirmation'
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
          <br />
          <button type='submit' value='Submit'>
            Signup
          </button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
};

export default SignUp;
