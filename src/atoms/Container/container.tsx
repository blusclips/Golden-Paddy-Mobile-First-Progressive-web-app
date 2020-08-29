/** @format */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export interface TypographyProps {
  children: any;
  border?: boolean;
  elevation?: number;
  width?: string;
  height?: number | string;
  margin?: number | string;
  bgColor?: string;
}

export default ({
  children,
  elevation,
  width,
  height,
  margin,
  bgColor,
}: TypographyProps) => {
  const useStyles = makeStyles({
    root: {
      width: width ? width : 100,
      height: height ? height : 100,
      backgroundColor: bgColor,
      marginTop: margin,
      justifyContent: 'center',
      margin: 'auto',
      alignItems: 'center',
    },
  });
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={elevation ? elevation : 0}>
      {' '}
      {children}{' '}
    </Paper>
  );
};
