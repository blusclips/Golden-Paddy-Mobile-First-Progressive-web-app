/** @format */

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import './home.css';
import HomeTemplate from '../../templates/home';
import Loader from '../../atoms/Loader/loader';

export default () => {
  let history = useHistory();
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/login');
      return;
    }
    setAuthenticate(true);
  }, [history]);

  const onSignOut = async () => {
    try {
      await auth.signOut();
      history.push('/login');
      localStorage.clear();
    } catch (error) {}
  };

  return (
    <div className="home">
      <Loader visible={!authenticate} />
      {authenticate && (
        <HomeTemplate authenticate={authenticate} onLogout={onSignOut} onLogIn={() => null} />
      )}
    </div>
  );
};
