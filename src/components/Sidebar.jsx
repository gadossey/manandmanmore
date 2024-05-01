import React, { useState } from "react";
import { makeStyles } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, IconButton, Typography } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from "./imgs/logo.png";

const useStyles = makeStyles((theme) => ({
    sidebar: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingTop: '4rem',
      transition: 'all 300ms ease',
      [theme.breakpoints.down('sm')]: {
        position: 'fixed',
        zIndex: 9,
        background: '#ffe0e0',
        width: '55%',
        paddingRight: '1rem',
        height: '100%',
      }
    },
    bars: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        position: 'fixed',
        top: '2rem',
        left:'60%',
        background:'#ffe0e0',
        padding:'10px',
        borderRadius: '10px',
        zIndex: 9,
      },
    },
    logo: {
      display: 'flex',
      height: '5rem',
      fontWeight: 'bold',
      fontSize: '22px',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      height: '4%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
    logoImage: {
      width: '3rem',
      height: '3rem',
    },
    menu: {
      marginTop: '4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      height: '2.5rem',
      marginLeft: '2rem',
      position: 'relative',
      transition: 'all 300ms ease',
      borderRadius: '0.7rem',
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:last-child': {
        position: 'absolute',
        bottom: '2.3rem',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          position: 'relative',
          marginTop: '6rem',
        },
      },
      '&.active': {
        background: 'var(--activeItem)',
        marginLeft: 0,
        '&::before': {
          content: '""',
          width: '8px',
          height: '100%',
          background: 'var(--pink)',
          marginRight: 'calc(1rem - 8px)',
        },
      },
      [theme.breakpoints.down('md')]: {
        '& span': {
          display: 'none',
        },
      },
      [theme.breakpoints.down('sm')]: {
        '& span': {
          display: 'block',
        },
      },
    },
  }));

const Sidebar = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={handleDrawer}
      onKeyDown={handleDrawer}
    >
      <div className={classes.logo}>
        <img src={Logo} className={classes.logoImage} alt="logo" />
        <Typography variant="h6">Sh<span>o</span>ps</Typography>
      </div>
      <List>
        
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <Typography variant="subtitle1">Sign Out</Typography>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleDrawer}><MenuIcon /></IconButton>
      <Drawer anchor='left' open={isOpen} onClose={handleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
