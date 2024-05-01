import React from 'react';

import { Box, Typography } from '@mui/material';

const ContactDetails = ({ details }) => (
  <Box>
    {details.map((detail, index) => (
      <Box key={`detail-${index}`} mb={1}>
        <Typography variant="subtitle2">{detail.label}:</Typography>
        <Typography variant="body2">{detail.value}</Typography>
      </Box>
    ))}
  </Box>
);

export default ContactDetails;
