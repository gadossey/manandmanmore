import React, { useState } from "react";
import firebase from "../../api/firebase";
import { makeStyles } from "@mui/system";
import { TextField, Button, Typography } from "@mui/material";
import { navigate } from "gatsby"; // updated import statement

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    margin: "0 auto",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  error: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
  },
}));

const EmailSignInForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/dashboard"); // updated line
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSignIn}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.textField}
        required
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.textField}
        required
      />
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Sign In
      </Button>
      {error && <Typography variant="body1" className={classes.error}>{error}</Typography>}
    </form>
  );
};

export default EmailSignInForm;
