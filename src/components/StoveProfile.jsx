import React, { useEffect, useState } from 'react';
import { db } from '../api/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button, Typography, CircularProgress, Box, Container } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from './Layout/PageLayout';


const LeftComponent = () => (
  <Typography variant="h5" align="center">
   Stove no Nie
  </Typography>
);

const StoveProfile = ({ serialNumber, handleNext }) => {
  const [stove, setStove] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStoveProfile = async () => {
      if (serialNumber) {
        try {
          const stoveRef = doc(db, 'stoves', serialNumber);
          const stoveDoc = await getDoc(stoveRef);
    
          if (stoveDoc.exists()) {
            setStove(stoveDoc.data());
          } else {
            setError('No such document!');
          }
        } catch (error) {
          console.error('Error fetching stove profile:', error);
          setError('An error occurred while fetching the stove profile.');
        }
      } else {
        setError('Serial number is not defined!');
      }

      setLoading(false);
    }

    fetchStoveProfile();
  }, [serialNumber]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h5" color="error">{error}</Typography>
      </Box>
    );
  }

  const handleLoginClick = () => {
    // Handle the login flow here
    handleNext();
  }

  const handlePurchaseClick = () => {
    // Handle the purchase flow here
    handleNext();
  }

  const RightComponent = () => (
    <Container maxWidth="md">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}>
        <Typography variant="h4">Stove Found</Typography>
        {stove && (
          <StaticImage
            src="../../content/assets/stove.png"
            alt="Stove image"
            sx={{ width: '100%', height: 'auto', marginBottom: 2 }}
          />
        )}
        <Typography variant="h6">Model: {stove.model}</Typography>
        <Typography variant="body1">Specifications: {stove.specifications}</Typography>
        <Typography variant="body1">Year of Production: {stove.yearOfProduction}</Typography>
        <Typography variant="h6">Serial Number: {serialNumber}</Typography>
        
        {stove.isRegistered ? (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">Do you own this Stove? If yes, click here to login for more details:</Typography>
            <Button variant="contained" color="primary" onClick={handleLoginClick} sx={{ margin: 1 }}>Login</Button>
          </Box>
        ) : (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">This stove is available for Purchase:</Typography>
            <Button variant="contained" color="primary" onClick={handlePurchaseClick} sx={{ margin: 1 }}>Buy Now</Button>
            <Button variant="outlined" color="secondary" onClick={handleNext} sx={{ margin: 1 }}>Skip</Button>
          </Box>
        )}
      </Box>
    </Container>
  );
  return (
    <PageLayout LeftComponent={LeftComponent} RightComponent={RightComponent} />
  );
};

export default StoveProfile;
