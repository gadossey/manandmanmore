import React, { useState, useEffect, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/system";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Switch,
  TextField,
} from "@mui/material";
import { FaCamera, FaLightbulb } from "react-icons/fa";
import { getFirestore, doc, collection, getDoc } from "firebase/firestore";
import PageLayout from "./Layout/PageLayout";
import ScreenCover from "./ScreenCover";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: "10px",
    zIndex: "1",
    width: "100%",
  },
  controls: {
    position: "absolute",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px",
    zIndex: "2",
  },
  video: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
  },
  videoStyle: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
  },
});

const LeftComponent = () => (
  <Typography variant="h5" align="center">
    Scanning Code no
  </Typography>
);

const SerialNumberComponent = ({ handleNext, handleBack, accessPoint }) => {
  const classes = useStyles();
  const inputRef = useRef();
  const [showQrReader, setShowQrReader] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [serialNumber, setSerialNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const qrReaderRef = useRef(null);
  const db = getFirestore();

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;
    setShowQrReader(isMobileDevice);
  }, []);

  const handleScan = async (data) => {
    if (data) {
      setSerialNumber(data);
      setError("QR Code Scanned. Processing...");
      setOpenSnackbar(true);
      await checkSerialNumber(data);
    }
  };

  const handleRefreshClick = () => {
    qrReaderRef.current?.openImageDialog();
  };

  const checkSerialNumber = async (serialNumber) => {
    setIsLoading(true);
    const serialExists = await doesSerialExist(serialNumber);

    if (serialExists) {
      handleNext(serialNumber);
    } else {
      setError(
        "Stove serial does not exist. Please enter a valid serial number."
      );
      setOpenSnackbar(true);
    }

    setIsLoading(false);
  };

  const doesSerialExist = async (serialNumber) => {
    try {
      const docRef = doc(collection(db, "stoves"), serialNumber);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    } catch (err) {
      console.error(err);
      setError(
        "An error occurred while checking the stove serial. Please try again."
      );
      setOpenSnackbar(true);
      return false;
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const isFlashlightAvailable = true;

  const RightComponent = () => (
    <Box className={classes.content}>
      
      <QRScanner
        showQrReader={showQrReader}
        handleScan={handleScan}
        isFrontCamera={isFrontCamera}
        classes={classes}
      />
     
    </Box>
  );

  return (
    <PageLayout LeftComponent={LeftComponent} RightComponent={RightComponent} />
  );
};

export default SerialNumberComponent;

const Controls = ({ handleCameraToggle, handleFlashlightToggle }) => {
  const classes = useStyles();
  return (
    <Box className={classes.controls}>
      <IconButton onClick={handleCameraToggle}>
        <FaCamera />
      </IconButton>
      <IconButton onClick={handleFlashlightToggle}>
        <FaLightbulb />
      </IconButton>
    </Box>
  );
};
const QRScanner = ({ showQrReader, handleScan, isFrontCamera, classes }) => {
  const containerStyles ={
    width: '100vw',
    height: '100vh',
    position: 'relative',
    paddingTop: 0,
  };
  const videoStyles = {
    width: '100%', height: '100%', objectFit: 'cover'
  };
  const videoContainerStyles = {
    height: '100%',
     width: '100%' 
  };
  const constraints = { facingMode: isFrontCamera ? "user" : "environment" };
  return (
    showQrReader && (
      <QrReader
        constraints={constraints}
        onResult={handleScan}
        videoId="video"
        scanDelay={500}
        className={classes.video}
        containerStyle={containerStyles}
        videoContainerStyle={videoContainerStyles}
        videoStyle={videoStyles}
        ViewFinder= {ScreenCover}
      />
    )
  );
};

const Inputs = ({
  showQrReader,
  isMobileDevice,
  serialNumber,
  setSerialNumber,
  isLoading,
  error,
  classes,
  checkSerialNumber,
  handleBack,
  openSnackbar,
  handleCloseSnackbar,
  handleRefreshClick,
  handleCameraToggle,
  handleFlashlightToggle,
  isFlashlightAvailable,
  setShowQrReader,
}) => (
  <Box className={classes.content}>
    {isMobileDevice && (
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Switch
          checked={showQrReader}
          onChange={() => setShowQrReader(!showQrReader)}
          name="toggleScanner"
          color="primary"
        />
        <Typography>
          {showQrReader ? "Switch to Manual Entry" : "Switch to QR Scanner"}
        </Typography>
      </Box>
    )}
    {(!showQrReader || !isMobileDevice) && (
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Box width="100%">
          <TextField
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            fullWidth
          />
        </Box>
      </Box>
    )}

    <Box display="flex" justifyContent="center" marginTop={2}>
      <Button
        variant="contained"
        onClick={() => checkSerialNumber(serialNumber)}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Check"}
      </Button>
    </Box>
    <Box display="flex" justifyContent="center" marginTop={2}>
      <Button variant="contained" onClick={handleBack}>
        Back
      </Button>
    </Box>
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={openSnackbar}
      onClose={handleCloseSnackbar}
      message={error}
      autoHideDuration={6000}
    />
  </Box>
);
