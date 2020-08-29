/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '../atoms/TextField/text_field';
import Container from '../atoms/Container/container';
import LoginButton from '../atoms/Button/primary_button';
import Typography from '../atoms/Typography/Typography';

export interface AppSectionProps {
  onLogin?: () => void;
  loading?: boolean;
  password: string;
  passwordError?: boolean;
  passwordErrorMessage?: string;
  email: string;
  emailError?: boolean;
  emailErrorMessage?: string;
  onEmailTextChange: (text: string) => void;
  onPasswordTextChange: (text: string) => void;
}

export default ({
  onLogin,
  loading,
  password,
  email,
  emailError,
  passwordError,
  emailErrorMessage,
  passwordErrorMessage,
  onEmailTextChange,
  onPasswordTextChange,
}: AppSectionProps) => {
  const useStyles = makeStyles({
    container: {
      justifyContent: 'center',
    },
    text: {
      justifyContent: 'center',
      height: 50,
    },
  });
  const classes = useStyles();
  return (
    <Container margin={120} width="100%" height={200}>
      <Container width="90%" margin={30} height={50}>
        <Grid
          justify="center"
          className={classes.container}
          container
          item
          xs={12}
        >
          <Grid xs={3}>
            <Container width="100%" height="100%" margin={'10%'}>
              <Typography title> Email: </Typography>
            </Container>
          </Grid>
          <Grid direction="column" className={classes.text} xs={8}>
            <Container width="100%" height="100%">
              <Input
                onChange={onEmailTextChange}
                label="enter name"
                value={email}
                type="email"
                error={emailError}
                errorMessage={emailErrorMessage}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container width="90%" margin={50} height={50}>
        <Grid
          justify="center"
          className={classes.container}
          container
          item
          xs={12}
        >
          <Grid xs={3}>
            <Container width="100%" height="100%" margin={'10%'}>
              <Typography title> Password: </Typography>
            </Container>
          </Grid>
          <Grid direction="column" className={classes.text} xs={8}>
            <Container width="100%" height="100%">
              <Input
                onChange={onPasswordTextChange}
                label="password"
                type="password"
                value={password}
                error={passwordError}
                errorMessage={passwordErrorMessage}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container width="82%" margin={80}>
        <LoginButton onClick={onLogin} active={!loading} block title={loading ? "Loading...": "Login"} />
      </Container>
    </Container>
  );
};
