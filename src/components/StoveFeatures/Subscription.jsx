// src/components/UserDashboard/Subscription.js

import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import firebase from '../../api/firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

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

const Subscription = ({ userId }) => {
  const classes = useStyles();
  const firestore = firebase.firestore();
  const subscriptionRef = firestore.collection('subscriptions').doc(userId);
  const [subscription, loading, error] = useDocumentData(subscriptionRef);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!subscription) {
    return <div>No subscription found</div>;
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>Your Subscription</Typography>
      <Typography variant="body1">Type: {subscription.type}</Typography>
      <Typography variant="body1">Delivery Frequency: {subscription.frequency}</Typography>
      <Typography variant="body1">Next Delivery: {new Date(subscription.nextDelivery.seconds * 1000).toLocaleDateString()}</Typography>
    </Paper>
  );
};

export default Subscription;
