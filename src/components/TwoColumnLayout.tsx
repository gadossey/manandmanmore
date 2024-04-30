import React from 'react';
import PropTypes from 'prop-types';

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar component goes here */}
      {/* Your existing navbar code */}
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ flex: 1 ,border:10,color:'black',borderRadius: 120}}>{leftContent}</div>
        <div style={{ flex: 1, padding: '2rem' }}>{rightContent}</div>
      </div>
      {/* Footer component goes here */}
      {/* Your small footer code */}
    </div>
  );
};

TwoColumnLayout.propTypes = {
  leftContent: PropTypes.node.isRequired,
  rightContent: PropTypes.node.isRequired,
};

export default TwoColumnLayout;