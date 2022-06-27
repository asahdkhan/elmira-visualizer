/* eslint-disable */
import { useCallback, useContext } from 'react';
import { AppDataContext } from '../contexts/appDataContext';

export const useAppData = () => {
  const [appDataState, appDataDispatch] = useContext(AppDataContext);

  const fetchInitialData = useCallback(
    (kitchen) => {
      fetch(`${kitchen}-data.json`)
        .then((res) => res.json())
        .then((data) => {
          appDataDispatch({ type: 'KITCHEN_DATA', data });
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    [appDataDispatch],
  );

  const selectedApplianceData = useCallback(
    (appliance, data) => {
      // console.log('selectedApplianceData', appliance, data);
      const selectedAppliance = data?.appliances?.find(
        (item) => item?.name === appliance,
      );
      appDataDispatch({ type: 'APPLIANCE_DATA', data: selectedAppliance });
    },
    [appDataDispatch],
  );

  const genrateApplianceImage = useCallback(
    (applianceName, appliance, configureOrder) => {
      let imagesSet = [];
      let totalPricing = 0;
      for (var key of Object.keys(appliance)) {
        let modelSrc = appliance[key]?.modelSrc;
        totalPricing += appliance[key]?.usa || 0;
        if (appliance[key]?.modelSrc) {
          /* if modelSrc = {}, select modelSrc using style */
          if (typeof appliance[key]?.modelSrc === 'object') {
            const modelId = appliance['style']?.id;
            modelSrc = appliance[key] && appliance[key]?.modelSrc[modelId];
          }
          /* if configureOrder, generate imagesSet in the following order */
          if (configureOrder) {
            configureOrder?.forEach((e, i) => {
              if (e === key) {
                imagesSet[i] = modelSrc;
              }
            });
            /* if style specfic configureOrder, generate imagesSet in the following order */
          } else if (appliance['style']?.configureOrder) {
            appliance['style']?.configureOrder?.forEach((e, i) => {
              if (e === key) {
                imagesSet[i] = modelSrc;
              }
            });
          } else {
            imagesSet = [...imagesSet, modelSrc];
          }
        }
      }

      /* On colours selection and !insert style, remove style image from the imagesSet to avoid duplicate */
      if (appliance['colours']?.modelSrc && !appliance['style']?.insert) {
        let seen = false;
        imagesSet = imagesSet.filter((item) => {
          if (seen) {
            return true;
          }
          seen = item == appliance['style']?.modelSrc;
          return !seen;
        });
      } else if (appliance['style']?.insert) {
        imagesSet = [appliance['style']?.baseModelSrc, ...imagesSet];
      }

      appDataDispatch({
        type: 'CONFIGURED_DATA',
        data: {
          applianceName,
          configuredData: {
            ...appliance,
            totalPricing,
            imagesSet: imagesSet?.filter((element) => element !== undefined),
          },
        },
      });
    },
    [appDataDispatch],
  );

  // const resetImagesSet = useCallback(() => {
  //   appDataDispatch({
  //     type: 'RESET_IMAGE',
  //     data: { applianceName, configuredData: { ...appliance, imagesSet } },
  //   });
  // }, [appDataDispatch]);

  return {
    appDataState,
    fetchInitialData,
    selectedApplianceData,
    genrateApplianceImage,
  };
};
