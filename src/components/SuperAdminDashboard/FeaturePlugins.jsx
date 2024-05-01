// src/components/SuperAdminDashboard/FeaturePlugins.js

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/system';
import { 
  List, ListItem, ListItemText, ListSubheader, Button, Grid
} from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../../api/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FeaturePlugins = () => {
  const classes = useStyles();
  const firestore = firebase.firestore();
  const featuresRef = firestore.collection('features');
  const query = featuresRef.orderBy('createdAt');
  const [features] = useCollectionData(query, { idField: 'id' });

  const handleAddFeature = () => {
    // TODO: Show a form to create a new feature
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <List subheader={<ListSubheader>Feature Plugins</ListSubheader>} className={classes.root}>
          {features && features.map(feature => (
            <ListItem key={feature.id}>
              <ListItemText primary={feature.name} secondary={`Created at: ${feature.createdAt.toDate().toLocaleString()}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained" color="primary" onClick={handleAddFeature}>
          Add New Feature
        </Button>
      </Grid>
    </Grid>
  );
};

export default FeaturePlugins;
