// UploadFile.js
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {Box, CircularProgress, Grid, Typography, Button, Paper, Divider } from "@mui/material";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    padding: theme.spacing(2),
    border: "2px dashed",
    borderColor: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    cursor: "pointer",
    marginBottom: theme.spacing(2),
  },
  uploadButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[800],
    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
  fileName: {
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  progressContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
}));

function UploadFile({ onDrop, onUpload, file, fileName, uploading }) {
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Paper elevation={3}>
      <Box {...getRootProps()} className={classes.dropzone}>
        <input {...getInputProps()} />
        <Typography variant="h6">
          Drag 'n' drop an Excel file here, or click to select a file
        </Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={onUpload}
        disabled={!file}
        className={classes.uploadButton}
      >
        Upload
      </Button>
      {fileName && (
        <Typography className={classes.fileName}>
          Selected file: {fileName}
        </Typography>
      )}
      {uploading && (
        <Box className={classes.progressContainer}>
          <CircularProgress />
          <Typography variant="caption">Uploading...</Typography>
        </Box>
      )}
    </Paper>
  );
}

export default UploadFile;
