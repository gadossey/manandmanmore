import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const WarningDialog = ({ openWarningDialog, handleConfirmGenerate, handleCloseWarningDialog, stoveQuantity, manufacturerId }) => {
  return (
    <Modal
      open={openWarningDialog}
      onClose={handleCloseWarningDialog}
      aria-labelledby="warning-dialog-title"
      aria-describedby="warning-dialog-description"
    >
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography id="warning-dialog-title" variant="h6">
          Warning
        </Typography>
        <Typography id="warning-dialog-description">
          You are trying to Release {stoveQuantity} New {manufacturerId} Stoves.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleConfirmGenerate}>
          Confirm
        </Button>
      </Box>
    </Modal>
  );
};

export default WarningDialog;
