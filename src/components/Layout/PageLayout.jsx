import React from 'react';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const styles = {
  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
    overflow: 'hidden',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'transparent',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    border: '2px solid #fff',
    gap:'10px',
    borderRadius: '32px',
    background: 'rgba(154, 205, 50, 0.54)',
    margin: '10px',
    '@media (max-width: 768px)': {
      margin: '1px',
    },
  },
};


const PageLayout = ({ LeftComponent, RightComponent }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.container}>
      {!isMobile && (
        <Box sx={styles.leftContainer}>
          <LeftComponent />
        </Box>
      )}
      <Box sx={styles.rightContainer}>
        <RightComponent />
      </Box>
    </Box>
  );
};

export default PageLayout;
