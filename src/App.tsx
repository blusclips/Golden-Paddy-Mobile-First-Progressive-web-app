/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { appTestAction } from './redux/app';
import logo from './logo.svg';
import './App.css';

interface Props {
  appReducer: {
    isLoggedIn: boolean;
  };
}

function App() {
  const { isLoggedIn } = useSelector((state: Props) => state.appReducer);
  const dispatch = useDispatch();

  const onButtonPress = () => {
    //alert('works like charm');
    dispatch(appTestAction(!isLoggedIn));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isLoggedIn ? 'User LoggedIn' : 'No User Logged In '}
        </a>
        <Button variant="contained" color="primary" onClick={onButtonPress}>
          {' '}
          click
        </Button>
      </header>
    </div>
  );
}

export default App;
