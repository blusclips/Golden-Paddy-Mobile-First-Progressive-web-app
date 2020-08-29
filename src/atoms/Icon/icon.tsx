/** @format */

import React from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { FONT_SIZE, COLORS } from '../../config/theme';

export interface IconProps {
  name: string;
  color?: string;
  active?: boolean;
  buttonIcon?: boolean;
  disabled?: boolean;
}

export default ({ name, disabled, active, buttonIcon }: IconProps) => {
  const useStyles = makeStyles({
    root: {
      fontSize: '20px',
      color: active
        ? buttonIcon
          ? COLORS.WHITE
          : COLORS.PRIMARY_COLOR
        : disabled
        ? COLORS.TERTIARY_COLOR
        : buttonIcon
        ? COLORS.WHITE
        : COLORS.PRIMARY_COLOR_LIGHT,
    },
  });
  const classes = useStyles();
  return <Icon className={classes.root}> {name} </Icon>;
};
