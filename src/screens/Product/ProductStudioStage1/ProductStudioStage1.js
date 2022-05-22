/* eslint-disable  */
import { Grid, Typography, Box, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../../../ThemeStyle.css';
import { useAppData } from '../../../hooks/useAppData';
import { useNavigate, useParams } from 'react-router';
import ApplianceOptions from '../../../components/ApplianceOptions';

const ProductStudioStage1 = () => {
  const { selectedApplianceData, appDataState } = useAppData();
  const [appliance, setAppliance] = useState({});
  // Internal state
  const [modelOptions, setModelOptions] = useState(null);
  const [populateOptionsKey, setPopulateOptionsKey] = useState({
    key: '',
    populate: [],
  });

  // const navigate = useNavigate();
  const { appliances } = useParams();

  const { data, applianceData } = appDataState;
  const modelStylesData = applianceData?.styles;
  const modelOptionsData = applianceData?.modelOptions;

  // load selected appliances data from JSON
  useEffect(() => {
    selectedApplianceData(appliances, data);
  }, [data]);

  // on model i.e style selection, load the relevant other options
  const onModelSelection = (key, selectedStyle) => {
    setAppliance({ ...appliance, [key]: selectedStyle });
    const populateOptions = modelOptionsData.reduce((acc, item) => {
      if (selectedStyle?.options?.indexOf(item.id) !== -1) {
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
    } else if (
      appliance[key]?.parentkey === selectedOption?.parentkey &&
      appliance[key]?.id !== selectedOption?.id
    ) {
      updatedOptionsData = modelOptions.filter((mO) => !mO.if);
      console.log('remomve exist data');
    }

    if (updatedOptionsData?.length > 0) {
      setModelOptions(updatedOptionsData);
    }
  };

  console.log('applianceData', appliance);

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
                    30" 4-Burner Gas Top, Self-Clean
                  </Typography>
                </Box>
                <picture>
                  <img
                    className=""
                    src={require('../../../assets/images/30-4-Burner-Gas-Top-Self-Clean.png')}
                    alt="Range"
                  />
                </picture>
              </Box>
              <Box className="ApplianceBoxRight">
                <ApplianceOptions
                  modelStylesData={modelStylesData}
                  onModelSelection={onModelSelection}
                  onOptionSelection={onOptionSelection}
                  modelOptions={modelOptions}
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
    </StyledEngineProvider>
  );
};

export default ProductStudioStage1;
