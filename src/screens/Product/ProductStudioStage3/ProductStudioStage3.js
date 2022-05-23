/* eslint-disable  */
import { Grid, Typography, Box, Tooltip, Button } from '@mui/material';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
// import '../../../ThemeStyle.css';
const ProductStudioStage3 = () => {
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
            <Typography variant="h6" textAlign="center">
              HERITAGE COLLECTION
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="CreateKitchenSection">
            <Box className="MainKitchenSection">
              <Box className="ApplianceBoxLeft">
                <Box className="ApplianceName">
                  <Typography variant="h4" textAlign="center">
                    Model 1947-C
                  </Typography>
                  <a>
                    <Typography variant="body2" textAlign="center">
                      {' '}
                      MORE INFO ON THIS MODEL
                    </Typography>
                  </a>
                </Box>
                <picture>
                  {' '}
                  <img
                    className=""
                    src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean.png')}
                    alt="Range"
                  />{' '}
                </picture>
              </Box>
              <Box className="ApplianceBoxRight">
                <Box className="ModalBox">
                  <Box className="ModalContentBoxThird">
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        MODEL
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> 30" All-Electric{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        COLOUR
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Bisque
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Gas Type
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Liquid Propane
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Trim
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Chrome{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                    <Box className="ModalHeading LoopBox">
                      <img
                        className=""
                        src={require('../../../assets/images/VisualizerIconSecond.png')}
                        alt="Range"
                      />
                      <Typography variant="h6" textAlign="center">
                        Lorum
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        className="ModalDetailInfo"
                      >
                        {' '}
                        <span>-</span> Lorum Text{' '}
                      </Typography>
                      <a className="EditButton">CHANGE</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="FooterSection FooterSectionSecond">
              <Box className="FooterLeftSide">
                <Button className="CommonButton ViewButton" variant="contained">
                  VIEW YOUR DREAM KITCHEN
                </Button>
              </Box>
              <Typography variant="body1" textAlign="center">
                <Box textTransform="uppercase">
                  <strong>Or select a product below</strong> to build another
                  appliance.
                </Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="ProductApplianceBox">
            <ul>
              <li>
                <a>
                  <Box className="ProductApplianceImg">
                    <img
                      src={require('../../../assets/images/v-northstar-range-on.jpg')}
                      alt="Range"
                    />
                  </Box>
                  <Typography variant="body1" textAlign="center">
                    Range
                  </Typography>
                </a>
              </li>
              <li>
                <a>
                  <Box className="ProductApplianceImg">
                    <img
                      src={require('../../../assets/images/v-northstar-fridge-off.jpg')}
                      alt="Refrigerator"
                    />
                  </Box>
                  <Typography variant="body1" textAlign="center">
                    Refrigerator
                  </Typography>
                </a>
              </li>
              <li>
                <a>
                  <Box className="ProductApplianceImg">
                    <img
                      src={require('../../../assets/images/v-northstar-microwave-off.jpg')}
                      alt="Microwave"
                    />
                  </Box>
                  <Typography variant="body1" textAlign="center">
                    Microwave
                  </Typography>
                </a>
              </li>
              <li>
                <a>
                  <Box className="ProductApplianceImg">
                    <img
                      src={require('../../../assets/images/v-northstar-hood-splash-off.jpg')}
                      alt="Range Hood / Splashback"
                    />
                  </Box>
                  <Typography variant="body1" textAlign="center">
                    Range Hood / Splashback
                  </Typography>
                </a>
              </li>
              <li>
                <a>
                  <Box className="ProductApplianceImg">
                    <img
                      src={require('../../../assets/images/v-northstar-dishwasher-off.jpg')}
                      alt="Dishwasher / Panel"
                    />
                  </Box>
                  <Typography variant="body1" textAlign="center">
                    Dishwasher / Panel
                  </Typography>
                </a>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ProductStudioStage3;
