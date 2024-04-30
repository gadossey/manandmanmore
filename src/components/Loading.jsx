// src/components/Loading.js
import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
