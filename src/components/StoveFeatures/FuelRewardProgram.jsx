// src/components/UserDashboard/FuelRewardProgram.js

import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import firebase from '../../api/firebase';
import { makeStyles } from '@mui/system';
import { Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

const FuelRewardProgram = ({ userId }) => {
  const classes = useStyles();
  const firestore = firebase.firestore();
  const rewardsRef = firestore.collection('rewardPrograms').doc(userId);
  const [rewardProgram, loading, error] = useDocumentData(rewardsRef);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!rewardProgram) {
    return <div>No reward program found</div>;
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>Fuel Reward Program</Typography>
      <Typography variant="body1">Charcoal Saved: {rewardProgram.charcoalSaved} kg</Typography>
      <Typography variant="body1">Reward Points: {rewardProgram.rewardPoints}</Typography>
    </Paper>
  );
};

export default FuelRewardProgram;
