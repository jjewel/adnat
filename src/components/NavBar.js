import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AdnatContext from '../context/adnat/adnatContext';

const NavBar = () => {
  const adnatContext = useContext(AdnatContext);
  const { sessionId, logOut } = adnatContext;

  return (
    <nav className='navbar bg-primary'>
      <h1>Adnat</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {sessionId ? (
            <Link onClick={logOut}>Log Out</Link>
          ) : (
            <Link to='/signup'>Sign Up</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
