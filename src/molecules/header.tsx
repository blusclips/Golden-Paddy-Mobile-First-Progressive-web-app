/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '../atoms/Icon/icon';
import Typography from '../atoms/Typography/Typography';
import Image from '../atoms/Image/image';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme';

export interface TypographyProps {
  avatar?: string;
  user?: string;
  authenticate?: boolean;
  onLogoutOrIn?: () => void;
}

export default ({
  user='',
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
      top: 0,
      borderRadius: 0,
      backgroundColor: '#fff',
      borderStyle: 'solid',
      borderTopWidth: '0px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      borderBottomWidth: '2px',
      borderColor: COLORS.PRIMARY_COLOR_LIGHT,
    },
    tabContainer: {
      width: '100%',
      height: 56,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
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
          <Grid className={classes.tabContainer} xs={2}>
            <Image
              width={35}
              source={authenticate ? (avatar ? avatar : '/') : undefined}
              height={35}
              alt="user"
            />
          </Grid>
          <Grid className={classes.tabContainer} xs={2}>
            <Typography title>{authenticate ? user : ''}</Typography>
          </Grid>
          <Grid className={classes.tabContainer} xs={5}>
            {authenticate && <Icon name="add_shopping_cart" />}
          </Grid>
          <Grid onClick={onLogoutOrIn} className={classes.tabContainer} xs={3}>
            {'    '}
            <Typography title>{authenticate ? ' Logout ' : ' Login '}</Typography>
            <Icon
              margin={5}
              name={authenticate ? 'power_settings_new' : 'login'}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
