/* eslint-disable  */
import React, { useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useAppData } from '../../hooks/useAppData';
import { useMutateStorage } from '../../hooks/useMutateStorage';
import { useLocation, useNavigate } from 'react-router-dom';

const DreamKitchen = () => {
  const { appDataState } = useAppData();
  const { appliances } = appDataState?.data || {};

  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];

  useMutateStorage(parentPath);

  const navigate = useNavigate();

  const loadOptionsData = (modelOptions, configuredData) =>
    modelOptions.map((item) => {
      const { title, usa } = configuredData?.[item.id] || {};
      return (
        <li key={item.id}>
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

  const navigateToProduct = (name) => navigate(`../${name}/product-studio`);

  const loadAppliancesData = () => {
    const { configuredData } = appDataState || {};
    const render = [];
    let overallPricing = 0;

    for (const item of appliances || []) {
      const configuredAppliance = configuredData?.[item.name];
      const { modelPricing, totalPricing } = configuredAppliance || {};

      overallPricing += totalPricing || 0;
      render.push(
        <Grid
          key={item.name}
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className="PricingBoxCol"
        >
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
                onClick={() => navigateToProduct(item.name)}
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
                {loadOptionsData(item?.modelOptions, configuredAppliance)}
              </ul>
              <Box className="PricingFooterBox SkyBlueColor">
                <Typography variant="h5" textAlign="right">
                  <span>TOTAL</span>${totalPricing || ' ' + ''}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>,
      );
    }

    return {
      render,
      overallPricing,
    };
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
            alignItems="stretch"
            className="PricingContainerBox"
            spacing={0}
            marginLeft="auto"
            marginRight="auto"
          >
            {loadAppliancesData().render}
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
                  APPLIANCE TOTAL ${loadAppliancesData().overallPricing}
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
