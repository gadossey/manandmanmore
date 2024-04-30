// src/components/SuperAdminDashboard/SuperAdminPanel.js

import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserTable from '../AdminDashboard/UserTable';

import FeaturePlugins from './FeaturePlugins';
import CreateRewardProgram from '../AdminDashboard/CreateRewardProgram';
import CreateSubscription from '../AdminDashboard/CreateSubscription';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}));

const SuperAdminPanel = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UserTable />
        </Grid>
        <Grid item xs={12}>
          <CreateRewardProgram />
        </Grid>
        <Grid item xs={12}>
          <CreateSubscription />
        </Grid>
        <Grid item xs={12}>
          <FeaturePlugins />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuperAdminPanel;
