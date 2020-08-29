/** @format */

import React from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../config/theme';

export interface IconProps {
  name: string;
  color?: string;
  active?: boolean;
  buttonIcon?: boolean;
  disabled?: boolean;
  margin?: number | string;
}

export default ({ name, disabled, active, buttonIcon, margin }: IconProps) => {
  const useStyles = makeStyles({
    root: {
      fontSize: '20px',
      alignSelf: 'center',
      color: active
        ? buttonIcon
          ? COLORS.WHITE
          : COLORS.PRIMARY_COLOR
        : disabled
        ? COLORS.TERTIARY_COLOR
        : buttonIcon
        ? COLORS.WHITE
        : COLORS.PRIMARY_COLOR_LIGHT,
      marginLeft: margin,
    },
  });
  const classes = useStyles();
  return <Icon className={classes.root}> {name} </Icon>;
};
