/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '../atoms/Container/container';
import Typography from '../atoms/Typography/Typography';
import Image from '../atoms/Image/image';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../config/theme';

export interface TypographyProps {
  title?: string;
  source?: string;
}

export default ({ title, source }: TypographyProps) => {
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
      height: 205,
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
    textCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid justify="center" className={classes.container} xs={12}>
        <Grid className={classes.tabContainer} xs={12}>
          <Container width="100%" margin={20}>
            <Grid className={classes.textCenter} xs={12}>
              <Typography title> {title} </Typography>
            </Grid>
          </Container>
          <Image
            source={source ? source : '/.'}
            width={'100%'}
            height={'70%'}
            square
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
