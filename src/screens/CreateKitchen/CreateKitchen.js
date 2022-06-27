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
    appliancesSrc: [],
    patchSrc: '',
  });
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];
  const dreamKitchen = location.pathname.split('/')[2] === 'dream-kitchen';

  useEffect(() => {
    fetchInitialData(parentPath);
  }, [fetchInitialData, parentPath]);

  const { data, configuredData } = appDataState;

  // console.log('configuredData', configuredData);

  const fetchEnvSrc = (configuredData) => {
    if (Object.keys(configuredData)?.length > 0 && dreamKitchen) {
      let env_src = '';
      for (var item of data?.appliances) {
        env_src += configuredData?.[item.name]?.style?.env
          ? item.name + '_' + configuredData?.[item.name]?.style?.env + '&'
          : '';
      }
      env_src = env_src.slice(0, -1);

      console.log('env_src', env_src);

      return { env_src };
    }
  };

  useEffect(() => {
    const defaultCabinet = data?.cabinetColour?.find((item) => item.default);
    const env_src = 'src_' + fetchEnvSrc(configuredData)?.env_src;
    const env_patch = 'patch_' + fetchEnvSrc(configuredData)?.env_src;

    if (defaultCabinet) {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc: defaultCabinet?.[env_src] || defaultCabinet?.src,
        patchSrc: defaultCabinet?.[env_patch] || defaultCabinet?.patch,
      }));
    } else {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc: data?.cabinetColour[0]?.[env_src] || defaultCabinet?.src,
        patchSrc: data?.cabinetColour[0]?.[env_patch] || defaultCabinet?.patch,
      }));
    }
  }, [data?.cabinetColour, configuredData, setKitchen]);

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

  useEffect(() => {
    let defaultAppliances = [];
    let env_pos = '';
    if (Object.keys(configuredData)?.length > 0 && dreamKitchen) {
      defaultAppliances = data?.appliances?.map((item) => {
        env_pos = 'pos_' + fetchEnvSrc(configuredData)?.env_src;
        return {
          src: configuredData?.[item.name]?.imagesSet || [item.defaultModelSrc],
          positioning: item?.[env_pos] || item.positioning,
        };
      });
    } else {
      defaultAppliances = data?.appliances?.map((item) => ({
        src: [item.defaultModelSrc],
        positioning: item?.[env_pos] || item.positioning,
      }));
    }
    setKitchen((prevState) => ({
      ...prevState,
      appliancesSrc: defaultAppliances,
    }));
  }, [data?.appliances, configuredData, setKitchen]);

  const cabinetColour = () => {
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
                onClick={() => {
                  const env_src = 'src_' + fetchEnvSrc(configuredData)?.env_src;
                  const env_patch =
                    'patch_' + fetchEnvSrc(configuredData)?.env_src;
                  setKitchen({
                    ...kitchen,
                    cabinetSrc: item?.[env_src] || item?.src,
                    patchSrc: item?.[env_patch] || item?.patch,
                  });
                }}
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadConfiguredImage = (configuredAppliance) => {
    const { src, positioning } = configuredAppliance || {};

    return (
      <>
        {src?.length > 0 &&
          src?.map((el) => (
            <Image
              key={el}
              classes="childImageBox"
              style={{
                left: positioning?.[0],
                top: positioning?.[1],
              }}
              name={el}
            />
          ))}
      </>
    );
  };

  return (
    <>
      {!params.appliances && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          maxWidth="lg"
          marginLeft="auto"
          marginRight="auto"
        >
          <Grid item xs={12}>
            <Box className="VisualizerHeading">
              <Typography variant="h1" textAlign="center">
                {!dreamKitchen
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
                  {kitchen?.appliancesSrc?.length > 0 &&
                    kitchen?.appliancesSrc?.map((configuredAppliance) =>
                      loadConfiguredImage(configuredAppliance),
                    )}
                  {kitchen.patchSrc && (
                    <Image classes="childImageBox" name={kitchen.patchSrc} />
                  )}
                </Box>
                {!dreamKitchen && configuratorIcon()}
                {!dreamKitchen && (
                  <Box component="span" className="CommonIconBoxLast IconLast">
                    <Image name="images/VisualizerIcon.png" />
                    <Box component="div" className="CustomizeBox">
                      CUSTOMIZE YOUR NORTHSTAR APPLIANCE
                    </Box>
                  </Box>
                )}
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
