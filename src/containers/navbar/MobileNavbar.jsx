import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';


const MobileNavbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home"  />
      <BottomNavigationAction label="Profile"  />
      <BottomNavigationAction label="Settings"  />
    </BottomNavigation>
  );
};

export default MobileNavbar;
