/* eslint-disable  */
import { Grid, Typography, Box, Tooltip } from '@mui/material';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../../ThemeStyle.css';
const CreateKitchen = () => {
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
            LET’S CREATE YOUR DREAM KITCHEN!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="CreateKitchenSection">
          <Box className="HeaderSection">
          <Box className="HeaderLeftSide"></Box>
            <Box className="HeaderRightSide">
              <Box className="CabinetColorSection">
                <Typography variant="h6">CABINET COLOUR</Typography>
                <Box className="CabinetColors CommonCircle">
                  <ul>
                    <li>
                    <Tooltip placement="top" title="White">
                      <a
                        className="CabinetColorFirst"
                        style={{ backgroundColor: "#f7f7f1" }}
                      >
                        <span>White</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="Pussywillow">
                      <a
                        className="CabinetColorSecond Active"
                        style={{ backgroundColor: "#b3ada4" }}
                      >
                        <span>Pussywillow</span>
                      </a>
                      </Tooltip>
                    </li>
                    <li>
                    <Tooltip placement="top" title="DarkBlue">
                      <a
                        className="CabinetColorThird"
                        style={{ backgroundColor: "#2a3d4c" }}
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
                            "url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)",
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
                            "url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)",
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
                            "url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)",
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
                            "url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)",
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
                            "url(https://elmirastg.wpengine.com/wp-content/uploads/2022/05/Dry-Creek-Plum.jpg)",
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
              src={require('../../assets/images/2022-North30-30.png')}
              // src="https://elmirastg.wpengine.com/wp-content/uploads/2022/05/2022-North30-30.jpg"
              alt="Kitchen"
            />
            <Box component="span" className="CommonIconBox NorthstarIconFirst">
              <Tooltip placement="top-start" title="Configure your Microwave">
                <Box className='Icon'></Box>
              </Tooltip>
            </Box>
            <Box component="span" className="CommonIconBox NorthstarIconSecond">
              <Tooltip placement="top-start" title="Configure your Dishwasher">
                <Box className='Icon'></Box>
              </Tooltip>
            </Box>
            <Box component="span" className="CommonIconBox NorthstarIconThird">
              <Tooltip
                placement="top-start"
                title="Configure your Rangehood & Splashback"
              >
                <Box className='Icon'></Box>
              </Tooltip>
            </Box>
            <Box component="span" className="CommonIconBox NorthstarIconFourth">
              <Tooltip placement="top-start" title="Configure your Range">
                <Box className='Icon'></Box>
              </Tooltip>
            </Box>
            <Box component="span" className="CommonIconBox NorthstarIconFifth">
              <Tooltip placement="top-start" title="Configure your Refrigerator">
                <Box className='Icon'></Box>
              </Tooltip>
            </Box>
            <Box component="span" className="CommonIconBoxLast IconLast">
            <img
                        className=''
                        // src={require('../../assets/images/VisualizerIcon.png').default}
                        src="https://elmirastg.wpengine.com/wp-content/uploads/2022/05/VisualizerIcon.png"
                        alt="Visualizer Icon"
                      />
              <Box component="div" className="CustomizeBox">
                CUSTOMIZE YOUR NORTHSTAR APPLIANCE
              </Box>
            </Box>
          </Box>
          <Box className='FooterSection'>
          <Typography variant="body1" textAlign="center">
          <b>PLEASE NOTE:</b> Kitchen and product images are for illustrative purposes only, not for installation or cabinet planning. View appliance specification sheets for exact dimensions of products.
          </Typography>        
          </Box>
        </Box>
      </Grid>
    </Grid>
  </StyledEngineProvider>
  
  );
};

export default CreateKitchen;
