/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import { Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import '../../../ThemeStyle.css';
import { useAppData } from '../../../hooks/useAppData';
import { useParams } from 'react-router';
import ApplianceOptions from '../../../components/ApplianceOptions';
import zIndex from '@mui/material/styles/zIndex';

const ProductStudioStage1 = () => {
  const { selectedApplianceData, genrateApplianceImage, appDataState } =
    useAppData();

  // Internal state
  const [appliance, setAppliance] = useState({});
  const [modelOptions, setModelOptions] = useState(null);

  const { appliances: applianceName } = useParams();

  const { data, applianceData, configuredData } = appDataState;
  const modelStylesData = applianceData?.styles;
  const modelOptionsData = applianceData?.modelOptions;
  const configuredApplianceData = configuredData?.[applianceName];
  // clear internal state on params change
  useEffect(() => {
    setAppliance({});
    setModelOptions(null);
  }, [applianceName]);

  // load selected appliances data from JSON
  useEffect(() => {
    selectedApplianceData(applianceName, data);
  }, [data, selectedApplianceData, applianceName]);

  // in case of no model style
  //optimize
  useEffect(() => {
    if (
      applianceData?.name === applianceName &&
      modelOptionsData &&
      !modelStylesData
    ) {
      setModelOptions(modelOptionsData);
    }
  }, [applianceData, applianceName, modelStylesData, modelOptionsData]);

  useEffect(() => {
    genrateApplianceImage(applianceName, appliance);
    console.log('genrateApplianceImage');
  }, [appliance, applianceName, genrateApplianceImage]);

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
    setAppliance({ ...appliance, [key]: selectedOption });

    let updatedOptionsData = [];
    if (!appliance[key]?.populate && selectedOption?.populate) {
      updatedOptionsData = [
        ...modelOptions,
        ...modelOptionsData.filter((mO) => mO.if === selectedOption?.id),
      ];
    } else if (selectedOption?.removeAssociated) {
      console.log(
        'key--',
        appliance[key]?.parentkey,
        selectedOption?.removeAssociated,
      );
      updatedOptionsData = modelOptions.filter(
        (mO) => mO.if !== selectedOption?.removeAssociated,
      );
    }

    if (updatedOptionsData?.length > 0) {
      setModelOptions(updatedOptionsData);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadConfiguredImage = () => {
    let parentImg = '';
    let childImg = [];
    if (applianceData?.baseModelSrc) {
      parentImg = applianceData?.baseModelSrc;
      childImg = configuredApplianceData?.imagesSet;
    } else {
      const [p, ...c] = configuredApplianceData?.imagesSet || [];
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
          <img
            className="firstChildImageBox"
            src={require(`../../../assets/${parentImg}`)}
            alt="Range"
          />
        )}
        {childImg?.length > 0 &&
          childImg?.map((src, i) => (
            <img
              key={src}
              className={'childImageBox'}
              src={require(`../../../assets/${src}`)}
              alt="Range"
            />
          ))}
      </>
    );
  };

  console.log('configuredData', configuredApplianceData);

  const fetchbackgroundImg = () => {
    let backgroundImg = null;
    if (configuredApplianceData?.style?.bg) {
      backgroundImg = configuredApplianceData?.style?.bg;
    } else if (applianceData?.bg) {
      backgroundImg = applianceData?.bg;
    }
    console.log('fetchbackgroundImg', backgroundImg);
    return backgroundImg;
  };

  return (
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
            NORTHSTAR COLLECTION
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="CreateKitchenSection">
          <Box className="HeaderSectionThird">
            <Box className="HeaderCenterSide">
              <Box className="CabinetColorSection">
                <Typography variant="h6">
                  SELECT MODEL THEN COLOUR AND ADDITIONAL OPTIONS WILL OPEN
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="MainKitchenSection">
            <Box className="ApplianceBoxLeft">
              <Box className="ApplianceName">
                <Typography variant="h4" textAlign="center">
                  {`Configure your ${applianceName}`}
                </Typography>
              </Box>
              <Box className="parentApplianceContainer">
                <picture
                  className="parentApplianceImageBox"
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
          <Box className="FooterSection">
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
