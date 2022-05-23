import React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const MainStyles = () => {
  return (
    <GlobalStyles
      styles={{
        '.createKitchenSection': {
          border: '2px solid #dad6d5',
          borderRadius: '6px',
        },
        '.width100': {
          width: '100%',
        },
        '.parentKitchenImageBox': {
          position: 'relative',
          top: 0,
          left: 0,
        },
        '.parentApplianceImageBox': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
        '.firstChildImageBox': {
          position: 'relative',
          top: 0,
          left: 0,
        },
        '.childImageBox': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
      }}
    />
  );
};

export default MainStyles;
