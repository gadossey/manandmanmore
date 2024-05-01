import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  rightSide: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 0,
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const RightSideLayout = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.rightSide}>
      <div className={classes.section}>
        <Typography variant="h3">{title}</Typography>
        {children}
      </div>
    </div>
  );
};

export default RightSideLayout;
