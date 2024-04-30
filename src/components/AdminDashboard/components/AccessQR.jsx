import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../api/firebase';
import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from '@mui/material';

const AccessQR = () => {
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchReleases = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'productReleases'));
        const releasesData = querySnapshot.docs.map((doc) => doc.data());
        setReleases(releasesData);
      } catch (error) {
        console.error('Error fetching releases:', error);
      }
      setIsLoading(false);
    };

    fetchReleases();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Access QR Codes
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 4,
            maxWidth: '500px',
            outline: 'none',
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            List of Releases
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <List>
  {releases.map((release) => (
    <ListItem key={release.serialNumber}>
      <ListItemText primary={release.serialNumber} />
    </ListItem>
  ))}
</List>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AccessQR;
