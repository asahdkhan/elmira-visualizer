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

  return { appDataState, fetchInitialData, selectedApplianceData };
};
