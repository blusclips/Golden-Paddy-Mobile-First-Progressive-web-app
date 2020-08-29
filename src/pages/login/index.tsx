/** @format */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../config/firebase';
import LoginTemplate from '../../templates/login';

interface User {
  email: string;
  password: string;
}

export default () => {
  let history = useHistory();
  const [authenticateError, setAuthenticateError] = useState(false);

  const onLoginUser = async ({ email, password }: User) => {
    try {
      const user: any = await auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('userId', user.uid);
      history.push('/');
    } catch (error) {
      setAuthenticateError(true);
    }
  };

  return (
    <div>
      <LoginTemplate
        onLoginUser={onLoginUser}
        authenticate={authenticateError}
      />
    </div>
  );
};
