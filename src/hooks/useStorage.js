/* eslint-disable */
import { useEffect, useState } from 'react';
// import { useAppData } from './useAppData';

export const useStorage = (applianceName = '') => {
  const [localItem, setLocalItem] = useState(null);
  const [modelOptions, setModelOptions] = useState([]);
  const [appliance, setAppliance] = useState({});

  // const { appDataState } = useAppData();
  // const { configuredData } = appDataState;
  // const configuredApplianceData = configuredData?.[applianceName];

  useEffect(() => {
    setModelOptions([]);
    setAppliance({});
    setLocalItem(localStorage.getItem(applianceName));
  }, [applianceName]);

  useEffect(() => {
    if (localItem) {
      const { options, configuration } = JSON.parse(localItem);
      // clear internal state on params change
      setModelOptions(options);
      setAppliance(configuration);
    }
  }, [localItem]);

  const save = (modelPricing) => {
    localStorage.setItem(
      applianceName,
      JSON.stringify({
        options: modelOptions,
        configuration: { ...appliance, modelPricing },
      }),
    );
    setLocalItem(localStorage.getItem(applianceName));
  };

  const reset = () => {
    localStorage.removeItem(applianceName);
    setLocalItem(null);
    setModelOptions([]);
    setAppliance({});
  };

  return {
    appliance,
    setAppliance,
    modelOptions,
    setModelOptions,
    save,
    reset,
    localItem,
  };
};
