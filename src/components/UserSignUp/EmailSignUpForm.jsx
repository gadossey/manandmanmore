import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/firebase';
import { Button, TextField, Typography } from '@material-ui/core';

const EmailSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User successfully signed up. You can navigate them to another page now.
      navigate('/user-profile');
    } catch (error) {
      console.error('Error during sign up: ', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>

      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default EmailSignUpForm;
