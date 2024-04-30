import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import { alpha } from '@mui/system';
import './ViewFinder.css';

function ScreenCover({ onCameraSwitch }) {
  const [scanSuccessful, setScanSuccessful] = useState(false);

  return (
    <Box 
      className={`viewFinder ${scanSuccessful ? 'success' : ''}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 2,
        '::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: -1,
        }
      }}
    >
      <Box className="animatedLine" sx={{ 
        height: '2px', 
        backgroundColor: 'primary.main', 
        position: 'absolute', 
        width: '100%', 
        animation: 'scan 2s linear infinite',
      }} />

      <Box 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          maxWidth: '500px',
          maxHeight: '500px',
          borderRadius: '20px',
          borderColor: 'info.main',
          borderStyle: 'dashed',
          borderWidth: '2px',
          backgroundColor: alpha('#000', 0),
        }}
      />

      <Typography 
        variant="h6" 
        component="div" 
        sx={{ 
          color: 'white',
          padding: 2,
          textAlign: 'center',
          position: 'absolute',
          bottom: '15%',
        }}
      >
        Place QR code within frame to scan.
      </Typography>

      <IconButton 
        aria-label="switch camera" 
        onClick={onCameraSwitch} 
        sx={{ 
          color: 'white',
          position: 'absolute', 
          bottom: 5, 
          right: 5 
        }}
      >
        <CameraFrontIcon />
      </IconButton>
    </Box>
  );
}

export default ScreenCover;

