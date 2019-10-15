import React from 'react';

const SignUp = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='p-3'>
      <form onSubmit={onSubmit} className='card'>
        <h2 className='text-center'>Sign Up</h2>
        <input type='text' name='name' placeholder='Name...' />
        <input type='email' name='email' placeholder='Email...' />
        <input type='password' name='password' placeholder='Password...' />
        <input
          type='password'
          name='passwordConfirmation'
          placeholder='Confirm Password...'
        />
        <input
          type='submit'
          value='Create Account'
          className='btn btn-primary'
        />
      </form>
    </div>
  );
};

export default SignUp;
