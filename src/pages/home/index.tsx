/** @format */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';

export default () => {
  let history = useHistory();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/login');
    }
  }, [history]);

  const onSignOut = async () => {
    try {
      await auth.signOut();
      history.push('/login');
      localStorage.clear();
    } catch (error) {}
  };

  return (
    <div>
      {' '}
      login <button onClick={onSignOut}> logout </button>{' '}
    </div>
  );
};
