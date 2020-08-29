/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '../atoms/Icon/icon';
import Typography from '../atoms/Typography/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme';

export interface TypographyProps {
  avatar?: string;
  user?: string;
  authenticate?: boolean;
  onLogoutOrIn?: () => void;
}

export default ({
  user,
  avatar,
  onLogoutOrIn,
  authenticate,
}: TypographyProps) => {
  const useStyles = makeStyles({
    header: {
      height: 65,
    },
    root: {
      width: '100%',
      height: 55,
      position: 'fixed',
      bottom: 0,
      borderRadius: 0,
      backgroundColor: '#fff',
      borderStyle: 'solid',
      borderTopWidth: '1px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      borderBottomWidth: '0px',
      borderColor: '#cbd7df',
    },
    tabContainer: {
      width: '100%',
      height: 56,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  });
  const classes = useStyles();
  return (
    <>
      <div className={classes.header} />
      <Paper elevation={0} className={classes.root}>
        <Grid
          justify="center"
          container
          item
          xs={12}
        >
          <Grid className={classes.tabContainer} xs={4}>
             <Icon name="home" />
             <Typography tab color={COLORS.PRIMARY_COLOR}> Home </Typography>
          </Grid>

          <Grid className={classes.tabContainer} xs={4}>
        <Icon color={COLORS.TERTIARY_COLOR } name="explore" />
             <Typography tab> Explore </Typography>
          </Grid>

          <Grid className={classes.tabContainer} xs={4}>
        <Icon color={ COLORS.TERTIARY_COLOR } name="settings" />
            <Typography tab> Settings </Typography>
          </Grid>
           
        </Grid>
      </Paper>
    </>
  );
};
