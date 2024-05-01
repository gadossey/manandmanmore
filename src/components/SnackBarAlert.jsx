// UploadSnackbar.js

import { Snackbar, Alert } from "@mui/material";
import React, { useContext } from "react";
import { UploadContext } from "./Upload";

export default function UploadSnackbar() {
  const { snackBarState, setSnackBarState } = useContext(UploadContext);

  const closeSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (
    <Snackbar
      open={snackBarState.open}
      autoHideDuration={6000}
      onClose={closeSnackBar}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={closeSnackBar}
        severity={snackBarState.severity}
      >
        {snackBarState.message}
      </Alert>
    </Snackbar>
  );
}
