/* eslint-disable */
import { useEffect } from 'react';
import { useAppData } from './useAppData';

export const useMutateStorage = () => {
  const { appDataState, genrateApplianceImage } = useAppData();
  const { configuratorIcon, appliances } = appDataState?.data || {};

  useEffect(() => {
    // Optimize :  Reset configure date to avoid configured data on going back
    configuratorIcon?.map((element) => {
      const localItem = localStorage.getItem(element.id);

      if (localItem) {
        const { configuration } = JSON.parse(localItem);
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
