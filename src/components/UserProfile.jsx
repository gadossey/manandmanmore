// src/components/UserDashboard/UserProfile.js

import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import firebase from '../api/firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const UserProfile = ({ userId }) => {
  const classes = useStyles();
  const firestore = firebase.firestore();
  const userRef = firestore.collection('users').doc(userId);
  const [user, loading, error] = useDocumentData(userRef);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No user data found</div>;
  }

  const handleEditProfile = () => {
    // Implement functionality to edit profile here
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>Your Profile</Typography>
      <Typography variant="body1">Name: {user.name}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Phone: {user.phone}</Typography>
      <Button variant="outlined" color="primary" className={classes.button} onClick={handleEditProfile}>
        Edit Profile
      </Button>
    </Paper>
  );
};

export default UserProfile;
