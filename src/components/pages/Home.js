import React, { useContext } from 'react';
import SignIn from '../SignIn';
import Account from '../Account';
import AdnatContext from '../../context/adnat/adnatContext';

const Home = () => {
  const { sessionId } = useContext(AdnatContext);
  return <div>{sessionId ? <Account /> : <SignIn />}</div>;
};

export default Home;
