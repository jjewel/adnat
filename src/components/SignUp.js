import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

export class SignUp extends Component {
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.signUp();
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
            value={this.props.email}
            onChange={this.props.onChange}
          />
          <br />
          <input
            type='text'
            placeholder='Full Name...'
            name='name'
            value={this.props.name}
            onChange={this.onChange}
          />
          <br />
          <input
            type='password'
            placeholder='Password...'
            name='password'
            value={this.props.password}
            onChange={this.onChange}
          />
          <br />
          <input
            type='password'
            placeholder='Confirm Password...'
            name='passwordConfirmation'
            value={this.props.passwordConfirmation}
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
