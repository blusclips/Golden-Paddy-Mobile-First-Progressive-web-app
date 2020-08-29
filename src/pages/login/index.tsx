/** @format */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppLogoSection from '../../molecules/app_logo_section';
import LoginForm from '../../molecules/login_form';
import { auth } from '../../config/firebase';

export default () => {
  let history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onUsername = (text: string) => {
    setError(false);
    setPassword(text);
  };

  const onEmail = (text: string) => {
    setError(false);
    setEmail(text);
  };

  const onLoginUser = async () => {
    try {
      const { user }: any = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      localStorage.setItem('userId', user.uid);
      history.push('/');
    } catch (error) {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div>
      <AppLogoSection />
      <LoginForm
        password={password}
        email={email}
        onPasswordTextChange={onUsername}
        onEmailTextChange={onEmail}
        onLogin={onLoginUser}
        passwordError={error}
        passwordErrorMessage="Incorrect Email Or Password"
      />
    </div>
  );
};
