/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import DefaultTemplate from '../../templates/default';

export default () => {
  let history = useHistory();
  return (
    <>
      <DefaultTemplate onLogIn={() => history.push('/login')} />
    </>
  );
};
