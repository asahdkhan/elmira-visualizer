/* eslint-disable */
import { useEffect } from 'react';
import { useAppData } from './useAppData';

export const useMutateStorage = (parentPath = '') => {
  const { appDataState, genrateApplianceImage } = useAppData();
  const { configuratorIcon, appliances } = appDataState?.data || {};

  useEffect(() => {
    // Optimize :  Reset configure date to avoid configured data on going back
    configuratorIcon?.map((element) => {
      const localData = localStorage.getItem(parentPath);
      const parseLocalData = JSON.parse(localData)?.[element?.id] || null;

      if (parseLocalData) {
        const { configuration } = parseLocalData || {};
        const appliance = appliances?.find(
          (item) => item?.name === element?.id,
        );
        genrateApplianceImage(
          element.id,
          configuration,
          appliance?.configureOrder,
        );
      }
    });
  }, [appliances, configuratorIcon, genrateApplianceImage]);

  return { configuredData: appDataState?.configuredData };
};
