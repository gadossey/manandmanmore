import React from "react";
import { Snackbar } from "@mui/material";

const SnackbarNotification = ({ openSnackbar, handleCloseSnackbar, error }) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={handleCloseSnackbar}
      message={error}
    />
  );
};

export default SnackbarNotification;
