import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  errorLogContainer: {
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.error.main,
    fontSize: "0.7rem",
  },
  errorButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
    marginTop: theme.spacing(1),
    fontSize: "0.7rem",
  },
}));

function ErrorLog({ errors, onReviewRequest }) {
  const classes = useStyles();

  return (
    <Box className={classes.errorLogContainer}>
      <Typography variant="h6">Error Log</Typography>
      <List>
        {errors.map((error, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Row ${error.row}: ${error.error}`}
              secondary={error.reviewRequested ? "Review Requested" : null}
              className={
                error.reviewRequested ? classes.errorText : undefined
              }
            />
            {!error.reviewRequested && (
              <Button
                className={classes.errorButton}
                onClick={() => onReviewRequest(error.id)}
              >
                Request Review
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ErrorLog;
