/* eslint-disable */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import React, { useEffect, useRef, useState } from 'react';
import { Grid, Typography, Box, Tooltip, Button } from '@mui/material';
import { useAppData } from '../../hooks/useAppData';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import ReactToPrint from 'react-to-print';
import Image from '../../components/DynamicImages';
// import { styles as classes } from './CreateKitchen.styles';

const CreateKitchen = () => {
  const { appDataState, fetchInitialData, reset } = useAppData();
  const dreamKitchenRef = useRef(null);
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
      let envArray = ['30', '30'];
      for (const item of data?.appliances) {
        const { env, envOrder } = configuredData?.[item.name]?.style || {};
        envArray[envOrder] = env;
      }
      envArray = envArray.filter((i) => i != undefined);

      const env = envArray[0] + '_' + envArray[1];
      return { env };
    }
  };

  useEffect(() => {
    const defaultCabinet = data?.cabinetColour?.find((item) => item.default);
    const { env } = fetchEnvSrc(configuredData) || {};

    if (defaultCabinet) {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc: defaultCabinet?.['src_' + env] || defaultCabinet?.src,
        patchSrc: defaultCabinet?.['patch_' + env] || defaultCabinet?.patch,
      }));
    } else {
      setKitchen((prevState) => ({
        ...prevState,
        cabinetSrc:
          data?.cabinetColour[0]?.['src_' + env] || defaultCabinet?.src,
        patchSrc:
          data?.cabinetColour[0]?.['patch_' + env] || defaultCabinet?.patch,
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
        env_pos = fetchEnvSrc(configuredData)?.env;
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
                  const { env } = fetchEnvSrc(configuredData) || {};
                  setKitchen({
                    ...kitchen,
                    cabinetSrc: item?.['src_' + env] || item?.src,
                    patchSrc: item?.['patch_' + env] || item?.patch,
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
          className="VisualizerMainContainer"
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
              <Box id="no-print" className="HeaderSection">
                <Box className="HeaderLeftSide">
                  {dreamKitchen && (
                    <>
                      <ReactToPrint
                        trigger={() => (
                          <Button variant="Button" className="SavePdfBtn">
                            SAVE AS PDF
                          </Button>
                        )}
                        content={() => dreamKitchenRef.current}
                      />
                      <Button
                        variant="Button"
                        onClick={() => reset()}
                        className="ResetBtn"
                      >
                        RESET
                      </Button>
                    </>
                  )}
                </Box>

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
              <Box ref={dreamKitchenRef} className="MainKitchenSection">
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
                    {/* <Image name="images/VisualizerIcon.png" /> */}
                    <Box component="div" className="CustomizeBox">
                      CUSTOMIZE YOUR {parentPath} APPLIANCE
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
