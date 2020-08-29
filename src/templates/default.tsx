/** @format */

import React from 'react';
import Header from '../molecules/header';

interface Props {
  onLogIn: () => void;
}

export default ({ onLogIn }: Props) => {
  return (
    <>
      <Header authenticate={false} onLogoutOrIn={onLogIn} />
    </>
  );
};
