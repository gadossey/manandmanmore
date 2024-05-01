import React from 'react';
import { NotFoundWrapper, Container, ViewTitle, ViewContent, Button, BackButton } from './SharedComponents';
import { Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(2, 0),
  },
}));

const Summary = ({ handleRegistrationSubmit, handleBack, phoneNumber, serialNumber, locationData }) => {
  const classes = useStyles();

  return (
    <NotFoundWrapper>
      <Container>
        <ViewTitle>Summary</ViewTitle>
        <ViewContent>
          <Typography variant="body1" className={classes.content}>
            Phone Number: {phoneNumber}
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Serial Number: {serialNumber}
          </Typography>
          <Typography variant="body1" className={classes.content}>
            Location: {locationData.customLocation || `${locationData.city}, ${locationData.region}, ${locationData.country}`}
          </Typography>
        </ViewContent>
        <Button variant="contained" color="primary" onClick={handleRegistrationSubmit}>
          Verify
        </Button>
        <BackButton onClick={handleBack}>Back</BackButton>
      </Container>
    </NotFoundWrapper>
  );
};

export default Summary;
