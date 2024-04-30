import React, { useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  labelContainer: {
    width: '200px',
    height: '300px',
    border: '1px solid black',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  tableCell: {
    borderBottom: 'none',
  },
  qrCode: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default useStyles;
