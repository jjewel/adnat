import React from 'react';

const LogIn = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='p-3'>
      <form onSubmit={onSubmit} className='card'>
        <h2 className='text-center'>Welcome</h2>
        <input type='email' name='email' placeholder='Email...' />
        <input type='password' name='password' placeholder='Password...' />
        <input type='submit' value='Sign in' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default LogIn;
