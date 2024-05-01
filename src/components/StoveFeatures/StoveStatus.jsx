// src/components/UserDashboard/StoveStatus.js

import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../../api/firebase';
import { makeStyles } from '@mui/system';
import { Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

const StoveStatus = ({ userId }) => {
  const classes = useStyles();
  const firestore = firebase.firestore();
  const stovesRef = firestore.collection('stoves').where('userId', '==', userId);
  const [stoves, loading, error] = useCollectionData(stovesRef, { idField: 'id' });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!stoves || stoves.length === 0) {
    return <div>No stoves found</div>;
  }

  return stoves.map(stove => (
    <Paper key={stove.id} className={classes.paper}>
      <Typography variant="h6" className={classes.title}>Stove Serial Number: {stove.serialNumber}</Typography>
      <Typography variant="body1">Warranty Expiry: {new Date(stove.warrantyExpiry.seconds * 1000).toLocaleDateString()}</Typography>
      <Typography variant="body1">Status: {stove.status}</Typography>
    </Paper>
  ));
};

export default StoveStatus;
