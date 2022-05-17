/* eslint-disable  */
import { Grid, Typography, Box, Tooltip } from '@mui/material';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../../../ThemeStyle.css';
const ProductStudioStage1 = () => {
  return (
    <StyledEngineProvider injectFirst>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      maxWidth="xl"
      marginLeft="auto"
      marginRight="auto"
    >
      <Grid item xs={12}>
        <Box className="VisualizerHeading">
          <Typography variant="h1" textAlign="center">
          ELMIRA DESIGN LOFT
          </Typography>
          <Typography variant="h6" textAlign="center">HERITAGE COLLECTION</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="CreateKitchenSection">
          <Box className="HeaderSectionThird">
            <Box className="HeaderCenterSide">
              <Box className="CabinetColorSection">
                <Typography variant="h6">SELECT MODEL THEN COLOUR AND ADDITIONAL OPTIONS WILL OPEN</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="MainKitchenSection">
            <Box className='ApplianceBoxLeft'>
            <Box className='ApplianceName'><Typography  variant="h4" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography></Box>
              <picture> <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean.png')} alt="Range"/> </picture>
              
            </Box>
            <Box className='ApplianceBoxRight'>
            <Box className='ModalBox'>
              <Box className='ModalHeading'>
              <img className=""
              src={require('../../../assets/images/VisualizerIconSecond.png')} alt="Range"/>
              <Typography variant="h6" textAlign="center">MODEL</Typography>
              <a className='EditButton'>SELECT</a>
              </Box>
              <Box className='ModalContentBox'>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
                <Box className='ModalInfo'>
                <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean-small.png')} alt="Range" />
              <Typography  variant="body2" textAlign="center">30" 4-Burner Gas Top, Self-Clean</Typography>
                </Box>
              </Box>
              </Box> 
            </Box>
          </Box>
          <Box className='FooterSection'>
          <Typography variant="body1" textAlign="center">
          <b>* Explore details</b>  ON TRIMS, TRIVETS, AND OTHER FEATURES.
          </Typography>        
          </Box>
        </Box>
      </Grid>
    </Grid>
  </StyledEngineProvider>
  
  );
};

export default ProductStudioStage1;




