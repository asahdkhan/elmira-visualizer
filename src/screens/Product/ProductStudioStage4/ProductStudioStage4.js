/* eslint-disable  */
import { Grid, Typography, Box, Tooltip, Button } from '@mui/material';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../../../ThemeStyle.css';
const ProductStudioStage4 = () => {
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
              YOUR ELMIRA DREAM KITCHEN
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="CreateKitchenSection">
            <Box className="HeaderSection">
              <Box className="HeaderLeftSide">
                <a className="EditButton">SAVE AS PDF</a>
                <a className="EditButton RedLink">RESET</a>
              </Box>
              <Box className="HeaderRightSide">
                <Box className="CabinetColorSection">
                  <Typography variant="h6">CABINET COLOUR</Typography>
                  <Box className="CabinetColors CommonCircle">
                    <ul>
                      <li>
                        <Tooltip placement="top" title="White">
                          <a
                            className="CabinetColorFirst"
                            style={{ backgroundColor: '#f7f7f1' }}
                          >
                            <span>White</span>
                          </a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip placement="top" title="Pussywillow">
                          <a
                            className="CabinetColorSecond Active"
                            style={{ backgroundColor: '#b3ada4' }}
                          >
                            <span>Pussywillow</span>
                          </a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip placement="top" title="DarkBlue">
                          <a
                            className="CabinetColorThird"
                            style={{ backgroundColor: '#2a3d4c' }}
                          >
                            <span>DarkBlue</span>
                          </a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip placement="top" title="Dry Creek Plum">
                          <a
                            className="CabinetColorFourth"
                            style={{
                              backgroundImage:
                                'url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)',
                            }}
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
                              backgroundImage:
                                'url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)',
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
                              backgroundImage:
                                'url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)',
                            }}
                          >
                            <span>Lorum</span>
                          </a>
                        </Tooltip>
                      </li>
                    </ul>
                  </Box>
                </Box>
                <Box className="FlooringStyleSection">
                  <Typography variant="h6">Flooring Style</Typography>
                  <Box className="CabinetColors CommonCircle">
                    <ul>
                      <li>
                        <Tooltip placement="top" title="Lorum">
                          <a
                            className="CabinetColorFirst"
                            style={{
                              backgroundImage:
                                'url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)',
                            }}
                          >
                            <span>Lorum</span>
                          </a>
                        </Tooltip>
                      </li>
                      <li>
                        <Tooltip placement="top" title="Medium">
                          <a
                            className="CabinetColorSecond Active"
                            style={{
                              backgroundImage:
                                'url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)',
                            }}
                          >
                            <span>Medium</span>
                          </a>
                        </Tooltip>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="MainKitchenSection">
              <img
                className="KitchenImage"
                src={require('../../../assets/images/2022-North30-30.png')}
                // src="https://elmirastg.wpengine.com/wp-content/uploads/2022/05/2022-North30-30.jpg"
                alt="Kitchen"
              />
              <Box component="span" className="CommonIconBoxLast IconLast">
                <img
                  className=""
                  // src={require('../../assets/images/VisualizerIcon.png').default}
                  src="https://elmirastg.wpengine.com/wp-content/uploads/2022/05/VisualizerIcon.png"
                  alt="Visualizer Icon"
                />
                <Box component="div" className="CustomizeBox">
                  CUSTOMIZE YOUR NORTHSTAR APPLIANCE
                </Box>
              </Box>
            </Box>
            <Box className="FooterSection">
              <Typography variant="body1" textAlign="center">
                <b>PLEASE NOTE:</b> Kitchen and product images are for
                illustrative purposes only, not for installation or cabinet
                planning. View appliance specification sheets for exact
                dimensions of products.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="PricingContainerBox"
            spacing={5}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box className="PricingBox">
                <Box className="PricingHeaderBox SkyBlueBg">
                  <Typography variant="body1" textAlign="center">
                    RANGE
                  </Typography>
                  <Button className="CommonButton EditBtn" variant="contained">
                    EDIT
                  </Button>
                </Box>
                <Box className="PricingContentBox">
                  <ul>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model: 1875, non-convection
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 8295
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model Description
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          45” Six-Burner Dual Feul
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Self-Cleaning
                        </Typography>
                        <a className="EditButton">MORE MODEL INFO</a>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Colour
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Black
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Gas Type
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Natural Gas
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Metal Trim
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Door Frames
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 350
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Legs Trim
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 200
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Front Skirt
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 200
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Trivet
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 200
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Decorative Shelf
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 100
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Ventilation
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          Nickel
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Antiquing
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ 200
                        </Typography>
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box className="PricingFooterBox SkyBlueColor">
                  <Typography variant="h5" textAlign="right">
                    <span>TOTAL</span>$ 9345
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box className="PricingBox">
                <Box className="PricingHeaderBox RedBg">
                  <Typography variant="body1" textAlign="center">
                    REFRIGERATOR
                  </Typography>
                  <Button className="CommonButton AddBtn" variant="contained">
                    ADD
                  </Button>
                </Box>
                <Box className="PricingContentBox">
                  <ul>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model: <span className="RedColor">Not Selected</span>
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ -
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model Description
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Colour
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Handles
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Door Frames
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Hinge
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Ice Maker
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box className="PricingFooterBox RedColor">
                  <Typography variant="h5" textAlign="right">
                    <span>TOTAL</span>$ -
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box className="PricingBox">
                <Box className="PricingHeaderBox RedBg">
                  <Typography variant="body1" textAlign="center">
                    WALL OVEN
                  </Typography>
                  <Button className="CommonButton AddBtn" variant="contained">
                    ADD
                  </Button>
                </Box>
                <Box className="PricingContentBox">
                  <ul>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model: <span className="RedColor">Not Selected</span>
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ -
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model Description
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Colour
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Metal Trim Color
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Door Frames
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Antiquing
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box className="PricingFooterBox RedColor">
                  <Typography variant="h5" textAlign="right">
                    <span>TOTAL</span>$ -
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box className="PricingBox">
                <Box className="PricingHeaderBox RedBg">
                  <Typography variant="body1" textAlign="center">
                    MICROWAVE
                  </Typography>
                  <Button className="CommonButton AddBtn" variant="contained">
                    ADD
                  </Button>
                </Box>
                <Box className="PricingContentBox">
                  <ul>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model: <span className="RedColor">Not Selected</span>
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ -
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Colour
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Door Frames
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box className="PricingFooterBox RedColor">
                  <Typography variant="h5" textAlign="right">
                    <span>TOTAL</span>$ -
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box className="PricingBox">
                <Box className="PricingHeaderBox RedBg">
                  <Typography variant="body1" textAlign="center">
                    Dishwasher / Panel
                  </Typography>
                  <Button className="CommonButton AddBtn" variant="contained">
                    ADD
                  </Button>
                </Box>
                <Box className="PricingContentBox">
                  <ul>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Model: <span className="RedColor">Not Selected</span>
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right">
                          $ -
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Colour
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                    <li>
                      <Box className="ProductInfo">
                        <Typography variant="h6" textAlign="left">
                          Door Frames
                        </Typography>
                        <Typography variant="body2" textAlign="left">
                          -
                        </Typography>
                      </Box>
                      <Box className="ProductAmount">
                        <Typography variant="h6" textAlign="right"></Typography>
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box className="PricingFooterBox RedColor">
                  <Typography variant="h5" textAlign="right">
                    <span>TOTAL</span>$ -
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="PricingTotalBox"
            marginBottom={5}
            spacing={5}
          >
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <Box className="PricingTotalInfo SkyBlueBg">
                <Typography variant="h3" textAlign="center">
                  {' '}
                  APPLIANCE TOTAL $9,345{' '}
                </Typography>
                <Typography variant="body2" textAlign="center">
                  (excludes freight, delivery, and applicable taxes)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <a>
                <Box className="PricingTotalInfo WaterBlueBg">
                  <Typography variant="h3" textAlign="center">
                    {' '}
                    CONTACT US FOR YOUR TOTAL COST{' '}
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    (Elmira appliances plus freight, delivery, and applicable
                    taxes)
                  </Typography>
                </Box>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ProductStudioStage4;
