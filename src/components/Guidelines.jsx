import React, { useEffect, useState } from "react";
import { Typography, Button, Fade, useMediaQuery, Box } from "@mui/material";
import { useTheme } from '@mui/system';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PageLayout from "./Layout/PageLayout";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ScannerIcon from '@mui/icons-material/Scanner';

const LeftComponent = () => (
  <Typography variant="h5" align="center">
    We welcome you to our world of Innovations
  </Typography>
);

const RightComponent = ({ handleNext }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [render, setRender] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
     
      
        {isMobile ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CheckCircleOutlineIcon fontSize="large" color="primary" />
              <Typography variant="body1">
                Scan the QR code with moderate light.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CheckCircleOutlineIcon fontSize="large" color="primary" />
              <Typography variant="body1">
                Make sure the QR code is fully within the scanner frame.
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AlternateEmailIcon fontSize="large" color="primary" />
              <Typography variant="body1">
                Enter your Stove serial Number.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ScannerIcon fontSize="large" color="primary" />
              <Typography variant="body1">
                Please take note QR scanner is only available on Mobile or Tablets.
              </Typography>
            </Box>
          </>
        )}
        <Button variant="contained" color="primary" onClick={handleNext}>
          Get Started
        </Button>
    </Box>
  );
};

const Guidelines = ({ handleNext }) => {
  return (
    <PageLayout
      LeftComponent={LeftComponent}
      RightComponent={() => <RightComponent handleNext={handleNext} />}
    />
  );
};


export default Guidelines;
