/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import { Grid, Typography, Box, Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
// import '../../../ThemeStyle.css';
import { useAppData } from '../../../hooks/useAppData';
import { useNavigate, useParams, useLocation } from 'react-router';
import ApplianceOptions from '../../../components/ApplianceOptions';
import Image from '../../../components/DynamicImages';
import { useStorage } from '../../../hooks/useStorage';
import { Link } from 'react-router-dom';

const ProductStudioStage1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parentPath = location.pathname.split('/')[1];
  const { appliances: applianceName } = useParams();

  const { selectedApplianceData, genrateApplianceImage, appDataState } =
    useAppData();

  const { data, applianceData, configuredData } = appDataState;
  const modelStylesData = applianceData?.styles;
  const modelOptionsData = applianceData?.modelOptions;
  const configuredApplianceData = configuredData?.[applianceName];

  const {
    appliance,
    setAppliance,
    modelOptions,
    setModelOptions,
    save,
    reset,
    localItem,
  } = useStorage(parentPath, applianceName);

  // Internal state
  const [modelPricing, setModelPricing] = useState({});
  const [boxHeight, setBoxHeight] = useState(0);

  // clear internal state on params change
  // useEffect(() => {
  //   setModelOptions([]);
  //   setAppliance({});
  // }, [applianceName]);

  // load selected appliances data from JSON
  useEffect(() => {
    selectedApplianceData(applianceName, data);
  }, [data, selectedApplianceData, applianceName]);

  // in case of no model style
  useEffect(() => {
    if (
      applianceData?.name === applianceName &&
      modelOptionsData &&
      !modelStylesData
    ) {
      if (!localItem) {
        const updatedOptionsData = modelOptionsData.filter((item) => {
          return applianceData?.options?.indexOf(item.id) !== -1;
        });
        setModelOptions(updatedOptionsData);
      }
    }
  }, [
    applianceData,
    applianceName,
    modelStylesData,
    modelOptionsData,
    localItem,
  ]);

  useEffect(() => {
    genrateApplianceImage(
      applianceName,
      appliance,
      applianceData?.configureOrder,
    );
  }, [applianceData, appliance, applianceName, genrateApplianceImage]);

  const fetchModelNameWthPricing = useCallback(() => {
    let pricingObj = {};
    if (applianceData?.pricing) {
      for (var obj of applianceData.pricing) {
        const onSelection = obj?.onSelection;
        const keys = Object.keys(onSelection);
        if (keys.length > 0) {
          let match = [];
          for (var key of keys) {
            if (Array.isArray(obj?.onSelection?.[key])) {
              const valSelection = !!obj?.onSelection?.[key]?.find(
                (val) => val == appliance?.[key]?.id,
              );
              match = [...match, valSelection];
            } else {
              match = [
                ...match,
                obj?.onSelection?.[key] == appliance?.[key]?.id,
              ];
            }
          }
          pricingObj = match.every(Boolean) ? { ...obj } : pricingObj;
        } else {
          pricingObj = { ...obj };
        }
      }
    }
    return pricingObj;
  }, [appliance, applianceData]);

  useEffect(() => {
    setModelPricing(fetchModelNameWthPricing());
  }, [fetchModelNameWthPricing]);

  // on model i.e style selection, load the relevant other options
  const onModelSelection = (key, selectedStyle) => {
    setAppliance({ [key]: selectedStyle });
    const populateOptions = modelOptionsData.reduce((acc, item) => {
      if (selectedStyle?.options?.indexOf(item.id) !== -1) {
        // only shows required nested options from multiple options
        const nestedOptions = selectedStyle?.nestedOptions;
        if (nestedOptions && item.id in nestedOptions) {
          const updatedItem = {
            ...item,
            opt: item?.opt.filter(
              (f) => nestedOptions[item.id].indexOf(f.id) !== -1,
            ),
          };
          acc.push(updatedItem);
        } else {
          acc.push(item);
        }
      }
      return acc;
    }, []);
    setModelOptions(populateOptions);
  };

  // on appliance option selection,
  // - set the selected option data
  // - populate/ remove the relevant model option if exist
  const onOptionSelection = (key, selectedOption) => {
    setAppliance({
      ...appliance,
      [key]: selectedOption,
    });
    const updatedSelection = { ...appliance, [key]: selectedOption };

    let updatedOptionsData = [];
    if (!appliance[key]?.populate && selectedOption?.populate) {
      const populateArr = modelOptionsData.filter(
        (mO) => mO.if === selectedOption?.id,
      );
      const selectednOptionIndex = modelOptions.findIndex((x) => x.id === key);
      updatedOptionsData = [...modelOptions];
      updatedOptionsData.splice(selectednOptionIndex + 1, 0, ...populateArr);
    } else if (selectedOption?.removeAssociated) {
      updatedOptionsData = modelOptions.filter((mO) => {
        if (mO.if === selectedOption?.removeAssociated) {
          delete updatedSelection[mO.id];
        }
        return mO.if !== selectedOption?.removeAssociated;
      });
      setAppliance(updatedSelection);
    }

    if (updatedOptionsData?.length > 0) {
      setModelOptions(updatedOptionsData);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadConfiguredImage = () => {
    const { imagesSet } = configuredApplianceData || {};
    // console.log('imagesSet', imagesSet);
    let parentImg = '';
    let childImg = [];
    if (
      applianceData?.baseModelSrc &&
      !appliance['style']?.modelSrc &&
      !appliance['colours']?.modelSrc
    ) {
      parentImg = applianceData?.baseModelSrc;
      childImg = imagesSet;
    } else {
      const [p, ...c] = imagesSet || [];
      if (!p) {
        parentImg = applianceData?.defaultModelSrc;
      } else {
        parentImg = p;
      }
      childImg = c;
    }

    return (
      <>
        {parentImg && (
          <Image
            classes="firstChildImageBox"
            onLoad={(img) => setBoxHeight(img.target.offsetHeight + 100)}
            name={parentImg}
          />
        )}
        {childImg?.length > 0 &&
          childImg?.map((src) => (
            <Image key={src} classes="childImageBox" name={src} />
          ))}
      </>
    );
  };

  const fetchbackgroundImg = () => {
    let backgroundImg = null;
    if (configuredApplianceData?.style?.bg) {
      backgroundImg = configuredApplianceData?.style?.bg;
    } else if (applianceData?.bg) {
      backgroundImg = applianceData?.bg;
    }
    return backgroundImg;
  };

  return (
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
            ELMIRA DESIGN LOFT
          </Typography>
          <Typography variant="h6" textAlign="center">
            {`${data?.name?.toUpperCase()} COLLECTION`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="CreateKitchenSection">
          <Box className="HeaderSectionThird">
            <Box className="HeaderCenterSide">
              <Box className="CabinetColorSection">
                <Box
                  variant="body1"
                  component=""
                  onClick={() => navigate('../')}
                  className="BackButton"
                >
                  &#8592; Back
                </Box>
                <Typography variant="h6">
                  {applianceData?.msg ||
                    'SELECT MODEL THEN COLOUR AND ADDITIONAL OPTIONS WILL OPEN'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="MainKitchenSection" style={{ minHeight: boxHeight }}>
            <Box className="ApplianceBoxLeft">
              <Box className="ApplianceName">
                <Typography variant="h4" textAlign="center">
                  {Object.keys(modelPricing).length > 0
                    ? `${modelPricing?.modelName} ($${configuredApplianceData?.totalPricing})`
                    : `Configure your ${applianceName}`}
                </Typography>
              </Box>
              <Box className="parentApplianceContainer">
                <picture
                  className={
                    applianceName === 'rangehood'
                      ? 'parentApplianceImageBox'
                      : 'parentApplianceImageBox-apply'
                  }
                  style={
                    fetchbackgroundImg()
                      ? {
                          backgroundImage: `url(
                    ${require(`../../../assets/${fetchbackgroundImg()}`)}
                  )`,
                        }
                      : {}
                  }
                >
                  {loadConfiguredImage()}
                </picture>
              </Box>
            </Box>
            <Box className="ApplianceBoxRight">
              <ApplianceOptions
                modelStylesData={modelStylesData}
                onModelSelection={onModelSelection}
                onOptionSelection={onOptionSelection}
                modelOptions={modelOptions}
                selectedOptions={appliance}
              />
            </Box>
          </Box>
          <Box className="FooterSection FooterSectionSecond">
            <Box className="FooterLeftSide">
              <Button
                onClick={() => save(modelPricing)}
                className="CommonButton SaveBtn"
                variant="contained"
                disabled={Object.keys(modelPricing).length == 0}
              >
                Save First
              </Button>
              <Button
                onClick={reset}
                className="CommonButton SaveBtn"
                variant="contained"
                disabled={!localItem}
                sx={{ ml: 2, mr: 2 }}
              >
                Reset
              </Button>
              <Link style={{ textDecoration: 'none' }} to="../dream-kitchen">
                <Button
                  className="CommonButton SaveBtn"
                  variant="contained"
                  disabled={!localItem}
                >
                  VIEW YOUR DREAM KITCHEN
                </Button>
              </Link>
            </Box>
            <Typography variant="body1" textAlign="center">
              <b>* Explore details</b> ON TRIMS, TRIVETS, AND OTHER FEATURES.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductStudioStage1;
