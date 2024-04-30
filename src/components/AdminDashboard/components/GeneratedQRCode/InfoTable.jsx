import React, { useRef } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import useStyles from './styles';

const InfoTable = ({ info }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <Typography variant="subtitle2">Product</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography variant="subtitle2">Information</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((item, index) => (
            <TableRow key={`info-${index}`}>
              <TableCell className={classes.tableCell}>
                <Typography variant="body2">{item.label}</Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography variant="body2">{item.value}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InfoTable;
