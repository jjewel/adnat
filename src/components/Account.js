import React, { useContext } from 'react';
import AdnatContext from '../context/adnat/adnatContext';

const Account = () => {
  const { sessionId } = useContext(AdnatContext);
  return (
    <div>
      <h2>Hello Person</h2>
      <p>{sessionId}</p>
    </div>
  );
};

export default Account;
