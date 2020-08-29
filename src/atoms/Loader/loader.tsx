/** @format */
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';

import { COLORS } from '../../config/theme';

interface Props {
  visible: boolean;
}

export default ({ visible }: Props) => {
  const useStyles = makeStyles({
    root: {
      position: 'absolute',
      top: '45%',
      left: '44%',
    },
  });
  const classes = useStyles();

  if (!visible) {
    return null;
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <Loader
        type="TailSpin"
        color={COLORS.PRIMARY_COLOR}
        height={50}
        width={50}
        visible={visible}
      />
    </Paper>
  );
};
