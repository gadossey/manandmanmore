import React, { useState, useEffect } from "react";
import { navigate } from 'gatsby';
import axios from "axios";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import moment from 'moment';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app, db } from "../api/firebase";

import MuiAlert from "@material-ui/lab/Alert";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@mui/styles";
import { Box, Grid, List, ListItem, ListItemText, Paper, Typography, ListItemIcon, Button, Divider, CircularProgress, Snackbar } from '@mui/material';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

const useStyles = makeStyles((theme) => ({
  mainDash: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingTop: 0,

    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  card: {
    maxWidth: 800,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  fileListContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: theme.spacing(2),
  },
  dropzone: {
    padding: theme.spacing(2),
    border: "2px dashed",
    borderColor: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    cursor: "pointer",
  },
  addButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    zIndex: 9999,
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
  successText: {
    color: theme.palette.success.main,
    fontWeight: 500,
  },
  errorButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
    marginTop: theme.spacing(1),
    fontSize: "0.7rem",
  },
  errorText: {
    color: theme.palette.error.main,
    fontSize: "0.7rem",
  },
  errorLogContainer: {
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: theme.spacing(2),
  },
}));

function FileList({ uploadedFiles, handleFileClick,classes  }) {
  return (
    <div className={classes.fileListContainer}>
      {uploadedFiles.map((file) => (
        <Paper key={file.id} elevation={3} className={classes.card}>
          <ListItem button onClick={() => handleFileClick(file.id)}>
            <ListItemIcon>
              <InsertDriveFile color="action" />
            </ListItemIcon>
            <ListItemText
              primary={file.name}
              secondary={moment(file.date.toDate()).format('DD/MM/YYYY hh:mm A')}
            />
          </ListItem>
        </Paper>
      ))}
    </div>
  );
}

function FileDetails({ fileId }) {
  const [fileData, setFileData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [fieldSummaries, setFieldSummaries] = useState({});
  const [errors, setErrors] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const fileDocRef = doc(db, "uploadedFiles", fileId);
        const fileDocSnapshot = await getDoc(fileDocRef);
        const fileData = fileDocSnapshot.data();
        setFileData(fileData);

        const response = await axios.get(fileData.url);
        const base64 = response.data.split(",")[1];
        processFile(base64);
      } catch (error) {
        console.error("Failed to fetch file data:", error);
      }
    };

    fetchFileData();
  }, [fileId]);

  const processFile = (fileData) => {
    try {
      let binaryString = window.atob(fileData);
      let binaryData = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        binaryData[i] = binaryString.charCodeAt(i);
      }

      let workbook = XLSX.read(binaryData, { type: "array" });
      let worksheetName = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[worksheetName];
      let parsedData = XLSX.utils.sheet_to_json(worksheet);

      setTableData(parsedData);
    } catch (error) {
      console.error("Failed to parse file:", error);
      setSnackBarState({
        open: true,
        message: "Failed to parse the file. Please make sure it's a valid Excel file.",
        severity: "error",
      });
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        File Details
      </Typography>
      <Typography variant="body1" gutterBottom>
        File Name: {fileData.name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Uploaded On: {moment(fileData.date?.toDate()).format('DD/MM/YYYY hh:mm A')}
      </Typography>
      {/* Display the table or any other desired format for the file data */}
      <pre>{JSON.stringify(tableData, null, 2)}</pre>
    </div>
  );
}

function UploadHighLevel() {
  const classes = useStyles();
  const history = navigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileId, setFileId] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "uploadedFiles"), (snapshot) => {
      const newUploadedFiles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      newUploadedFiles.sort((a, b) => b.date - a.date);
      setUploadedFiles(newUploadedFiles);
    });

    return () => unsubscribe();
  }, []);

  const handleFileClick = async (fileId) => {
    try {
      const fileDocRef = doc(db, "uploadedFiles", fileId);
      const fileDocSnapshot = await getDoc(fileDocRef);
      const fileData = fileDocSnapshot.data();

      const response = await axios.get(fileData.url);
      const base64 = response.data.split(",")[1];

      navigate(`/file/${fileId}`, {
        state: {
          fileData: fileData,
          base64: base64,
        },
      });
    } catch (error) {
      console.error("Failed to fetch file data:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (
        file &&
        file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        try {
          setUploading(true);
          const reader = new FileReader();
          reader.onload = async (event) => {
            const base64 = event.target.result.split(",")[1];
            const storage = getStorage();
            const storageRef = ref(storage, `uploadedFiles/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, base64);

            uploadTask.on(
              "state_changed",
              (snapshot) => {},
              (error) => {
                setUploading(false);
                console.error("Failed to upload file:", error);
              },
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                const fileDoc = await addDoc(collection(db, "uploadedFiles"), {
                  name: file.name,
                  date: new Date(),
                  url: downloadURL,
                });

                setFileId(fileDoc.id);
                setUploading(false);
              }
            );
          };
          reader.readAsDataURL(file);
        } catch (error) {
          console.error("Failed to upload file:", error);
          setUploading(false);
        }
      } else {
        alert("Please drop a valid Excel file");
      }
    },
  });

  return (
    <div className={classes.mainDash}>
      <div className={classes.fileListContainer}>
        {uploadedFiles.map((file) => (
          <Paper key={file.id} elevation={3} className={classes.card}>
            <ListItem button onClick={() => handleFileClick(file.id)}>
              <ListItemIcon>
                <InsertDriveFile color="action" />
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={moment(file.date.toDate()).format('DD/MM/YYYY hh:mm A')}
              />
            </ListItem>
          </Paper>
        ))}
      </div>
      <input {...getInputProps()} style={{ display: 'none' }} />
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        startIcon={<AddIcon />}
        onClick={() => {
          const fileInput = document.querySelector('input[type="file"]');
          if (fileInput) {
            fileInput.click();
          }
        }}
      />
    </div>
  );
}

export default UploadHighLevel;
