/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '../atoms/Icon/icon';
import Typography from '../atoms/Typography/Typography';
import Image from '../atoms/Image/image';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme';

export interface Props {
  title: string;
  description?: string;
  source?: string;
}

export default ({ title, description, source }: Props) => {
  const useStyles = makeStyles({
    root: {
      width: '95%',
      marginLeft: '2.5%',
      height: 205,
      backgroundColor: COLORS.WHITE,
      marginBottom: 5,
      borderStyle: 'solid',
      borderWidth: 0.3,
      borderColor: COLORS.TERTIARY_COLOR_LIGHT,
    },
    tabContainer: {
      width: '100%',
      height: 110,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    paragraph: {
      width: '100%',
      height: 210,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  });
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid
        justify="center"
        className={classes.container}
        container
        item
        xs={12}
      >
        <Grid className={classes.tabContainer} xs={4}>
          <Image
            source={source ? source : '/'}
            width={100}
            height={100}
            square
          />
        </Grid>
        <Grid className={classes.paragraph} xs={8}>
          <Typography title> {title} </Typography>
          <Typography label>{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
