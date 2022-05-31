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
    (applianceName, appliance) => {
      let imagesSet = [];
      for (var key of Object.keys(appliance)) {
        if (appliance[key]?.modelSrc) {
          if (typeof appliance[key]?.modelSrc === 'object') {
            const modelId = appliance['style']?.id;
            const modelSrc =
              appliance[key] && appliance[key]?.modelSrc[modelId];
            if (key === 'colours') {
              imagesSet = [modelSrc, ...imagesSet];
            } else {
              imagesSet = [...imagesSet, modelSrc];
            }
          } else {
            if (key === 'colours') {
              imagesSet = [appliance[key]?.modelSrc, ...imagesSet];
            } else {
              imagesSet = [...imagesSet, appliance[key]?.modelSrc];
            }
          }
        }
      }
      console.log('imagesSet', appliance, imagesSet);
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
