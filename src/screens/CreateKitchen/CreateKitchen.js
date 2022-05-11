import { Grid, Typography } from '@mui/material';
import React from 'react';

import { styles as classes } from './CreateKitchen.styles';

const CreateKitchen = () => {
  return (
    <Grid sx={classes.background}>
      <Typography variant="h1">Create Kitchen</Typography>
    </Grid>
  );
};

export default CreateKitchen;
