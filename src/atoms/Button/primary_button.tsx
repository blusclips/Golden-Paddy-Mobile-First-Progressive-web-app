/** @format */

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../config/theme';

export interface TypographyProps {
  title: string;
  block?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export default ({
  title,
  block,
  disabled,
  active,
  onClick,
}: TypographyProps) => {
  const backgroundColor = active
    ? COLORS.PRIMARY_COLOR
    : !disabled
    ? COLORS.PRIMARY_COLOR_LIGHT
    : COLORS.WHITE_GRAY;
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
      color: disabled ? COLORS.TERTIARY_COLOR : COLORS.WHITE,
      textTransform: 'capitalize',
      fontFamily: 'Red Hat Display',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  });
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
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
    >
      {title}
    </Button>
  );
};
