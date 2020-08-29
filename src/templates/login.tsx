/** @format */

import React, { useState, useEffect } from 'react';
import AppLogoSection from '../molecules/app_logo_section';
import LoginForm from '../molecules/login_form';

interface User {
  email: string;
  password: string;
}

interface Props {
  authenticate?: boolean;
  loading?: boolean;
  onLoginUser: ({ email, password }: User) => void;
}

export default ({ onLoginUser, authenticate, loading }: Props) => {
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

  const onLoginUserPress = () => {
    onLoginUser({ email, password });
  };

  useEffect(() => {
    if (authenticate) {
      setError(true);
    } else {
      setError(false);
    }
  }, [authenticate]);

  return (
    <div>
      <AppLogoSection />
      <LoginForm
        loading={loading}
        password={password}
        email={email}
        onPasswordTextChange={onUsername}
        onEmailTextChange={onEmail}
        onLogin={onLoginUserPress}
        passwordError={error}
        passwordErrorMessage="Incorrect Email/Password. Try again "
      />
    </div>
  );
};
