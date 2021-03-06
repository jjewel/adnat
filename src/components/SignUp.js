import React, { useState, useContext } from 'react';
import AdnatContext from '../context/adnat/adnatContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const adnatContext = useContext(AdnatContext);
  const { signUp } = adnatContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    signUp(name, email, password, passwordConfirmation);
  };

  return (
    <div className='p-3'>
      <form onSubmit={onSubmit} className='card'>
        <h2 className='text-center'>Sign Up</h2>
        <input
          type='text'
          autoComplete='name'
          placeholder='Name...'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='email'
          autoComplete='email'
          placeholder='Email...'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          autoComplete='new-password'
          placeholder='Password...'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type='password'
          autoComplete='new-password'
          placeholder='Confirm Password...'
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <Link to='/'>
          <input
            type='submit'
            value='Create Account'
            className='btn btn-primary'
          />
        </Link>

        <span>
          <Link className='p' to='/'>
            Existing User...
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
