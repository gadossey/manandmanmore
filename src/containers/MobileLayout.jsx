import { AppBar, Toolbar, Button } from '@mui/material';

const MobileLayout = ({ children }) => (
  <div>
    {children}
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Settings</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default MobileLayout;
