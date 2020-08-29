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

export default ({ title='', source }: TypographyProps) => {
  const useStyles = makeStyles({
    root: {
      width: '90%',
      marginLeft: '5%',
      height: 205,
      backgroundColor: COLORS.WHITE,
      marginBottom: 5,
      borderStyle: 'solid',
      borderWidth: 0.3,
      borderColor: COLORS.TERTIARY_COLOR_LIGHT,
    },
    tabContainer: {
      width: '100%',
      height: 105,
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
      marginTop: 10,
      marginBottom: 10
    },
  });
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid justify="center" xs={12}>
          <Grid className={classes.textCenter}>
               <Typography title>{title}</Typography>
          </Grid>
          <Container width="90%"> 
              <Image
               alt="item"
               source={source ? source : '/.'}
               width={'100%'}
               height={'150%'}
               square
             />
          </Container>
      </Grid>
    </Paper>
  );
};


/*

<Grid className={classes.tabContainer} xs={12}>
          <Container width="100%" margin={20}>
            <Grid className={classes.textCenter} xs={12}>
              <Typography title> {title} </Typography>
            </Grid>
          </Container>
          <Container>
             <Image
               alt="img"
               source={source ? source : '/.'}
               width={'100%'}
               height={'100%'}
               square
             />
          </Container>
        </Grid> */