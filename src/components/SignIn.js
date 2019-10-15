import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='p-3'>
      <form onSubmit={onSubmit} className='card'>
        <h2 className='text-center'>Welcome</h2>
        <input
          type='email'
          autoComplete='email'
          name='email'
          placeholder='Email...'
        />
        <input
          type='password'
          autoComplete='current-password'
          name='password'
          placeholder='Password...'
        />
        <input type='submit' value='Sign in' className='btn btn-primary' />
        <span>
          <Link className='' to='/signup'>
            Create Account...
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
