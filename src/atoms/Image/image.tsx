/** @format */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

export interface TypographyProps {
  source?: string;
  alt: string;
  width?: number | string;
  height?: number;
}

export default ({ source, alt, width, height }: TypographyProps) => {
  const useStyles = makeStyles({
    root: {
      width: width ? width : 100,
      height: height ? height : 100,
    },
  });
  const classes = useStyles();
  return (
    <Avatar
      className={classes.root}
      alt={alt}
      src={source ? source : '/logo.png'}
    />
  );
};
