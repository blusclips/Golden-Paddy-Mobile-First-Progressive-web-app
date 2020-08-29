/** @format */

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '../Icon/icon';
import { COLORS } from '../../config/theme';

export interface TypographyProps {
  title: string;
  block?: boolean;
  disabled?: boolean;
  active?: boolean;
}

export default ({ title, block, disabled, active }: TypographyProps) => {
  const backgroundColor = disabled
    ? COLORS.WHITE_GRAY
    : COLORS.PRIMARY_LIGHT_BACKGROUND;
  const gradientBackground = `linear-gradient(45deg, ${backgroundColor} 100%,${backgroundColor} 100%)`;
  const useStyles = makeStyles({
    root: {
      background: gradientBackground,
      borderRadius: 100,
      border: 0,
      color: 'white',
      height: 40,
      padding: '0 30px',
    },
    label: {
      color: disabled
        ? COLORS.TERTIARY_COLOR
        : active
        ? COLORS.PRIMARY_COLOR
        : COLORS.PRIMARY_COLOR_LIGHT,
      textTransform: 'capitalize',
      fontFamily: 'Red Hat Display',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  });
  const classes = useStyles();
  return (
    <Button
      variant="text"
      disabled={disabled}
      disableElevation
      disableRipple={true}
      fullWidth={block}
      color="default"
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      className="Button"
      startIcon={<Icon active={active} disabled={disabled} name="home" />}
    >
      {title}
    </Button>
  );
};
