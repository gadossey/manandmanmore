// Navbar.js
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useState } from "react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{ width: 500, position: "fixed", bottom: 0 }}
    >
      <BottomNavigationAction label="Guidelines" icon={<RestoreIcon />} />
      <BottomNavigationAction label="StoveRegistration" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Summary" icon={<ArchiveIcon />} />
    </BottomNavigation>
  );
}
