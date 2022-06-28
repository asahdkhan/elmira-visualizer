/* eslint-disable  */
import React, { useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useAppData } from '../../hooks/useAppData';
import { useMutateStorage } from '../../hooks/useMutateStorage';
import { useNavigate } from 'react-router-dom';

const DreamKitchen = () => {
  const { appDataState } = useAppData();
  const { appliances } = appDataState?.data || {};

  // const [pricing, setPricing] = useState({
  //   totalPricing: '',
  // });

  useMutateStorage();

  const navigate = useNavigate();

  const loadOptionsData = (modelOptions, configuredData) => {
    let pricing = 0;
    const render = () =>
      modelOptions.map((item) => {
        const { title, usa } = configuredData?.[item.id] || {};
        pricing += usa;
        return (
          <li key={item.text}>
            <Box className="ProductInfo">
              <Typography variant="h6" textAlign="left">
                {item.text}
              </Typography>
              <Typography variant="body2" textAlign="left">
                {title || '-'}
              </Typography>
            </Box>
            <Box className="ProductAmount">
              <Typography variant="h6" textAlign="right">
                {usa ? '$' + usa : '-'}
              </Typography>
            </Box>
          </li>
        );
      });
    return { render, pricing };
  };

  console.log('pricing');

  const loadAppliancesData = () => {
    const configuredData = appDataState?.configuredData;

    return appliances?.map((item) => {
      const configuredAppliance = configuredData?.[item.name];
      const { modelPricing } = configuredAppliance || {};
      return (
        <Grid key={item.name} item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box className="PricingBox">
            <Box
              className={`PricingHeaderBox ${
                configuredAppliance ? 'SkyBlueBg' : 'RedBg'
              }`}
            >
              <Typography variant="body1" textAlign="center">
                {item.name}
              </Typography>
              <Button
                onClick={() => navigate(`../${item.name}/product-studio`)}
                className={`CommonButton ${
                  configuredAppliance ? 'EditBtn' : 'AddBtn'
                }`}
                variant="contained"
              >
                {configuredAppliance ? 'EDIT' : 'ADD'}
              </Button>
            </Box>
            <Box className="PricingContentBox">
              <ul>
                {item?.styles && (
                  <li>
                    <Box className="ProductInfo">
                      {modelPricing && Object.keys(modelPricing).length > 0 ? (
                        <>
                          <Typography variant="h6" textAlign="left">
                            Model
                          </Typography>
                          <Typography variant="body2" textAlign="left">
                            {`${modelPricing?.modelName} ($${modelPricing?.usa})`}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="h6" textAlign="left">
                            Model:{' '}
                            <span className="RedColor"> Not Selected</span>
                          </Typography>
                        </>
                      )}
                    </Box>
                    <Box className="ProductAmount">
                      <Typography variant="h6" textAlign="right">
                        {modelPricing?.usa ? '$' + modelPricing?.usa : '-'}
                      </Typography>
                    </Box>
                  </li>
                )}
                {loadOptionsData(
                  item?.modelOptions,
                  configuredAppliance,
                )?.render()}
              </ul>
              <Box className="PricingFooterBox SkyBlueColor">
                <Typography variant="h5" textAlign="right">
                  <span>TOTAL</span>$
                  {configuredAppliance?.totalPricing || ' ' + ''}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      );
    });
  };

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
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="PricingContainerBox"
            spacing={0}
            marginLeft="auto"
            marginRight="auto"
          >
            {loadAppliancesData()}
            {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
            </Grid> */}
            {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
            </Grid> */}
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
            spacing={0}
            marginLeft="auto"
            marginRight="auto"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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

export default DreamKitchen;
