/* eslint-disable */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Tooltip } from '@mui/material';
import { useAppData } from '../../hooks/useAppData';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import Image from '../../components/DynamicImages';
// import { styles as classes } from './CreateKitchen.styles';

const CreateKitchen = () => {
  const { appDataState, fetchInitialData } = useAppData();
  const [kitchen, setKitchen] = useState({
    cabinetSrc: '',
    flooringSrc: '',
    appliancesSrc:
      'cabinets/all-appliances/northstar-30-30-all-appliances-bisque.png',
    patchSrc: '',
  });
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];
  const endPath = location.pathname.split('/')[2];

  useEffect(() => {
    fetchInitialData(parentPath);
  }, [fetchInitialData, parentPath]);

  const { data } = appDataState;

  useEffect(() => {
    const defaultCabinet = data?.cabinetColour?.find((item) => item.default);
    if (defaultCabinet) {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc: defaultCabinet.src,
        patchSrc: defaultCabinet.patch,
      }));
    } else {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc: data?.cabinetColour[0].src,
        patchSrc: data?.cabinetColour[0].patch,
      }));
    }
  }, [data?.cabinetColour, setKitchen]);

  useEffect(() => {
    const defaultFlooring = data?.flooringStyle?.find((item) => item.default);
    if (defaultFlooring) {
      setKitchen((prevState) => ({
        ...prevState,
        flooringSrc: defaultFlooring.src,
      }));
    } else {
      setKitchen((prevState) => ({
        ...prevState,
        flooringSrc: data?.flooringStyle[0].src,
      }));
    }
  }, [data?.flooringStyle, setKitchen]);

  // console.log('appDataState', kitchen);

  const cabinetColour = () => {
    // const classes = useStyle();
    return (
      <ul>
        {data?.cabinetColour?.map((item) => (
          <li key={item?.name}>
            <Tooltip placement="top" arrow title={item?.name || ''}>
              <a
                className={kitchen.cabinetSrc === item.src && `Active`}
                style={{
                  backgroundImage: `url(
                    ${require(`../../assets/${item?.icon}`)}
                  )`,
                }}
                onClick={() =>
                  setKitchen({
                    ...kitchen,
                    cabinetSrc: item.src,
                    patchSrc: item.patch,
                  })
                }
              >
                <span>{item?.name || ''}</span>
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    );
  };

  const flooringStyle = () => {
    return (
      <ul>
        {data?.flooringStyle?.map((item) => (
          <li key={item?.name}>
            <Tooltip placement="top" arrow title={item?.name || ''}>
              <a
                className={kitchen.flooringSrc === item.src && `Active`}
                style={{
                  backgroundImage: `url(
                    ${require(`../../assets/${item?.icon}`)}
                  )`,
                }}
                onClick={() =>
                  setKitchen({ ...kitchen, flooringSrc: item.src })
                }
              >
                <span>{item?.name || ''}</span>
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    );
  };

  const configuratorIcon = () =>
    data?.configuratorIcon?.map((item) => (
      <Box
        key={item.positioning}
        component="span"
        className={`CommonIconBox ${item.positioning}`}
        onClick={() => navigate(`./${item.id}/product-studio`)}
      >
        <Tooltip placement="top-start" arrow title={item.title}>
          <Box className="Icon"></Box>
        </Tooltip>
      </Box>
    ));

  return (
    <>
      {!params.appliances && (
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
                {endPath !== 'dream-kitchen'
                  ? 'LET’S CREATE YOUR DREAM KITCHEN!'
                  : 'YOUR ELMIRA DREAM KITCHEN'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="createKitchenSection">
              <Box className="HeaderSection">
                <Box className="HeaderLeftSide"></Box>
                <Box className="HeaderRightSide">
                  <Box className="CabinetColorSection">
                    <Typography variant="h6">CABINET COLOUR</Typography>
                    <Box className="CabinetColors CommonCircle">
                      {cabinetColour()}
                    </Box>
                  </Box>
                  <Box className="FlooringStyleSection">
                    <Typography variant="h6">Flooring Style</Typography>
                    <Box className="CabinetColors CommonCircle">
                      {flooringStyle()}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="MainKitchenSection">
                <Box className="parentKitchenImageBox width100">
                  {kitchen.cabinetSrc && (
                    <Image
                      classes="firstChildImageBox width100"
                      name={kitchen.cabinetSrc}
                    />
                  )}
                  {kitchen.flooringSrc && (
                    <Image
                      classes="childImageBox width100"
                      name={kitchen.flooringSrc}
                    />
                  )}
                  {kitchen.appliancesSrc && (
                    <Image
                      classes="childImageBox"
                      name={kitchen.appliancesSrc}
                    />
                  )}
                  {kitchen.patchSrc && (
                    <Image classes="childImageBox" name={kitchen.patchSrc} />
                  )}
                </Box>
                {configuratorIcon()}
                <Box component="span" className="CommonIconBoxLast IconLast">
                  <Image name="images/VisualizerIcon.png" />
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
        </Grid>
      )}
      <Outlet />
    </>
  );
};

export default CreateKitchen;
