/** @format */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FONT_SIZE, COLORS } from '../../config/theme';

export interface TypographyProps {
  children: string;
  uppercase?: boolean;
  title?: boolean;
  color?: string;
  subtitle?: boolean;
  paragraph?: string;
  tab?: boolean;
  size?: number;
}

export default ({
  children,
  uppercase,
  color,
  title,
  subtitle,
  paragraph,
  tab,
  size,
}: TypographyProps) => {
  const useStyles = makeStyles({
    root: {
      color: color ? color : COLORS.TERTIARY_COLOR,
      fontFamily: 'Red Hat Display',
      fontSize: size
        ? size
        : title
        ? FONT_SIZE.TITLE
        : subtitle
        ? FONT_SIZE.SUBTITLE
        : paragraph
        ? FONT_SIZE.PARAGRAPH
        : tab ? FONT_SIZE.TAB : FONT_SIZE.LABEL,
      fontWeight: title || tab  ? 'bold' : 'normal',
      textTransform: uppercase ? 'uppercase' : 'none',
      justifyContent: 'center',
    },
  });
  const classes = useStyles();
  return <Typography className={classes.root}>{children}</Typography>;
};
