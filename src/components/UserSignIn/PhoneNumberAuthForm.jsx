import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { RecaptchaVerifier } from 'firebase/auth';
import { auth, signInWithPhoneNumberAuth } from '../../api/firebase';
import { Button, TextField, Typography } from '@material-ui/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PhoneNumberAuthForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');
  const [recaptchaSolved, setRecaptchaSolved] = useState(false);
  let verifier = null;

  useEffect(() => {
    verifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved - will proceed with phone number submission
        setRecaptchaSolved(true);
      },
    }, auth);

    verifier.render().then((widgetId) => {
      verifier.recaptchaWidgetId = widgetId;
    });
  }, []);

  const onSubmitPhoneNumber = async (event) => {
    event.preventDefault();

    if (!recaptchaSolved) {
      setError('reCAPTCHA not solved. Please try again.');
      return;
    }

    if (!phoneNumber) {
      setError('Phone number is required.');
      return;
    }

    console.log('Phone number before parsing:', phoneNumber);

    const parsedNumber = parsePhoneNumberFromString(phoneNumber, 'GH');
    
    if (!parsedNumber || !parsedNumber.isValid()) {
      setError('Invalid phone number format. Please enter a valid phone number.');
      return;
    }

    const phoneNumberFormatted = parsedNumber.formatInternational();

    try {
      const confirmation = await signInWithPhoneNumberAuth(phoneNumberFormatted, verifier);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error('Error during sign in or sign up: ', error);
      setError('An error occurred. Please try again. Detailed error: ' + error.message);
    }
  };

  const onConfirmCode = async (event) => {
    event.preventDefault();

    try {
      const code = event.target.elements.code.value;
      await confirmationResult.confirm(code);

      // User successfully signed in or signed up. You can navigate them to another page now.
      navigate('/user-profile');
    } catch (error) {
      console.error('Error during confirmation: ', error);
      setError('Invalid confirmation code. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitPhoneNumber}>
        <TextField
          type="tel"
          name="phone-number"
          label="Phone Number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button id="sign-in-button" type="submit" variant="contained" color="primary">
          Send Code
        </Button>
      </form>

      {confirmationResult && (
        <form onSubmit={onConfirmCode}>
          <TextField
            type="number"
            name="code"
            label="Confirmation Code"
            placeholder="Confirmation Code"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Confirm Code
          </Button>
        </form>
      )}

      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default PhoneNumberAuthForm;
