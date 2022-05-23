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
        console.log(key + ' -> ' + appliance[key]?.modelSrc);
        if (appliance[key]?.modelSrc) {
          imagesSet.push(appliance[key]?.modelSrc);
        }
      }
      appDataDispatch({
        type: 'CONFIGURED_DATA',
        data: { applianceName, configuredData: { ...appliance, imagesSet } },
      });
    },
    [appDataDispatch],
  );

  return {
    appDataState,
    fetchInitialData,
    selectedApplianceData,
    genrateApplianceImage,
  };
};
