/* eslint-disable */
import { useCallback, useContext } from 'react';
import { AppDataContext } from '../contexts/appDataContext';

export const useAppData = () => {
  const [appDataState, appDataDispatch] = useContext(AppDataContext);

  const fetchInitialData = useCallback(
    (kitchen) => {
      fetch('visualizer-data.json')
        .then((res) => res.json())
        .then((data) => {
          const kitchenData = data?.kitchen?.find(
            (item) => item.name === kitchen,
          );
          appDataDispatch({ type: 'KITCHEN_DATA', data: kitchenData });
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
      for (var key of Object.keys(appliance)) {
        let modelSrc = appliance[key]?.modelSrc;
        if (appliance[key]?.modelSrc) {
          if (typeof appliance[key]?.modelSrc === 'object') {
            const modelId = appliance['style']?.id;
            modelSrc = appliance[key] && appliance[key]?.modelSrc[modelId];
          }
          if (applianceName === 'rangehood') {
            // console.log('applianceName', key, configureOrder);
            configureOrder?.forEach((e, i) => {
              if (e === key) {
                imagesSet[i] = modelSrc;
              }
            });
          } else {
            imagesSet = [...imagesSet, modelSrc];
          }
        }
      }

      appDataDispatch({
        type: 'CONFIGURED_DATA',
        data: { applianceName, configuredData: { ...appliance, imagesSet } },
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
