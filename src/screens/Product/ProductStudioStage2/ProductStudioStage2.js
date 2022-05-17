/* eslint-disable  */
import { Grid, Typography, Box, Tooltip } from '@mui/material';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../../../ThemeStyle.css';
const ProductStudioStage2 = () => {
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
          <Box className="MainKitchenSection">
            <Box className='ApplianceBoxLeft'>
            <Box className='ApplianceName'>
              <Typography  variant="h4" textAlign="center">Model 1947-C</Typography>
              <a><Typography  variant="body2" textAlign="center"> MORE INFO ON THIS MODEL</Typography></a>
              </Box>
              <picture> <img className=""
              src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean.png')} alt="Range"/> </picture>
              
            </Box>
            <Box className='ApplianceBoxRight'>
            <Box className='ModalBox'>
              <Box className='ModalPricing'>
              <Typography  variant="h3"><span>$6,595</span> BASE MODEL</Typography>
              <Typography  variant="body1">(model shown <span>$7,645</span> )</Typography>
              </Box>
              
              <Box className='ModalHeading'>
              <img className=""
              src={require('../../../assets/images/VisualizerIconSecond.png')} alt="Range"/>
              <Typography variant="h6" textAlign="center">MODEL</Typography>
              <Typography variant="body1" textAlign="center" className='ModalDetailInfo'> <span>-</span> 30" All-Electric </Typography>
              <a className='EditButton'>CHANGE</a>
              </Box>
              <Box className='ModalHeading'>
              <img className=""
              src={require('../../../assets/images/VisualizerIconSecond.png')} alt="Range"/>
              <Typography variant="h6" textAlign="center">COLOUR</Typography>
              <a className='EditButton'>SELECT</a>
              </Box>
              <Box className='ModalContentBoxSecond'>
              <Box className="CabinetColors CommonCircle">
                  <ul>
                    <li>
                    <Tooltip placement="top" title="Textured Black">
                      <a
                        className="CabinetColorFirst Active"
                        style={{ background: "#2b2d2d" }}
                      >
                        <span>Textured Black</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Pussywillow">
                      <a
                        className="CabinetColorSecond"
                        style={{ background: "linear-gradient( 90deg, #2b2d2d, #2b2d2d 52%, #f1f2f2 54% )" }}
                      >
                        <span>Pussywillow</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="DarkBlue">
                      <a
                        className="CabinetColorThird"
                        style={{ background: "linear-gradient( 90deg, #2b2d2d, #2b2d2d 52%, #efdbb2 54% )" }}
                      >
                        <span>DarkBlue</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Dry Creek Plum">
                      <a
                        className="CabinetColorFourth"
                        style={{ background:"#f1f2f2", }}
                      >
                        <span>Dry Creek Plum</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Lorum">
                      <a
                        className="CabinetColorFifth"
                        style={{
                          background:
                            "#efdbb2",
                        }}
                      >
                        <span>Lorum</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Lorum">
                      <a
                        className="CabinetColorSixth"
                        style={{
                          background:
                            "#802f2d",
                        }}
                      >
                        <span>Lorum</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Lorum">
                      <a
                        className="CabinetColorSixth"
                        style={{
                          background:
                            "#00263e",
                        }}
                      >
                        <span>Lorum</span>
                      </a>
                      </Tooltip>
                    </li>
                  </ul>
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

export default ProductStudioStage2;




