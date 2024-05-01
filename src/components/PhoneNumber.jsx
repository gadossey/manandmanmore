import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import Alert from '@material-ui/lab/Alert';

const PhoneNumber = ({ handleNext, handleBack, phoneNumber, setPhoneNumber }) => {
  const [error, setError] = useState('');

  const validatePhoneNumber = (phone) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/; // simple regex for phone number validation
    return regex.test(phone);
  };

  const handleNextClick = async () => {
    if (validatePhoneNumber(phoneNumber)) {
      // TODO: Call your backend function here to generate OTP and send it through BulkGate
      handleNext();
    } else {
      setError('Invalid phone number. Please check and try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Phone Number</Typography>
      <TextField
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          setError('');
          setPhoneNumber(e.target.value);
        }}
        required
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Button variant="contained" color="primary" onClick={handleNextClick} disabled={!phoneNumber}>
        NEXT
      </Button>
      <Button variant="contained" color="default" onClick={handleBack}>
        Back
      </Button>
    </Container>
  );
};

export default PhoneNumber;