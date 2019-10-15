import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdnatContext from '../context/adnat/adnatContext';

const SignIn = () => {
  const { signIn } = useContext(AdnatContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    signIn(email, password);
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
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          autoComplete='current-password'
          name='password'
          placeholder='Password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
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
