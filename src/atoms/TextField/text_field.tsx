/** @format */

import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../config/theme';

export interface TypographyProps {
  label: string;
  id?: string;
  type: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange: (text: string) => void;
}

export default ({
  label,
  disabled,
  value,
  id,
  type,
  error,
  errorMessage,
  onChange,
}: TypographyProps) => {
  const useStyles = makeStyles({
    root: {
      borderColor: 'red',
    },
    input: {
      backgroundColor: '#f0f6f1',
      borderRadius: 5,
      borderWidth: 50,
      color: COLORS.TERTIARY_COLOR,
      paddingLeft: 8,
      paddingRight: 8,
      fontSize: '14px',
      height: 40,
      fontWeight: 'bold',
    },
    label: {
      color: COLORS.TERTIARY_COLOR_LIGHT,
      fontFamily: 'Red Hat Display',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 11,
      marginBottom: 5,
    },
    error: {
      fontSize: 11,
      marginTop: 2,
      fontWeight: 'normal',
      color: 'red',
    },
  });
  const classes = useStyles();
  return (
    <>
      <InputLabel className={classes.label} htmlFor={id}>
        {label}
      </InputLabel>
      <InputBase
        id={id}
        className={classes.input}
        disabled={disabled}
        type={type}
        value={value}
        inputProps={{ 'aria-label': 'naked' }}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputLabel className={classes.error} htmlFor={id}>
        {error && errorMessage}
      </InputLabel>
    </>
  );
};
