import { useState } from 'react';
// import { useAppData } from './useAppData';

export const useStorage = (applianceName = '') => {
  // const { appDataState } = useAppData();
  // const { configuredData } = appDataState;
  // const configuredApplianceData = configuredData?.[applianceName];

  let initialModelState = [];
  let initialApplianceState = {};

  const localItem = localStorage.getItem(applianceName);
  if (localItem) {
    const { options, configuration } = JSON.parse(localItem);
    initialModelState = options;
    initialApplianceState = configuration;
  }

  const [modelOptions, setModelOptions] = useState(initialModelState);
  const [appliance, setAppliance] = useState(initialApplianceState);
  const [isLocalStorage, setIsLocalStorage] = useState(!!localItem);

  const save = (modelPricing) => {
    localStorage.setItem(
      applianceName,
      JSON.stringify({
        options: modelOptions,
        configuration: { ...appliance, modelPricing },
      }),
    );
    setIsLocalStorage(true);
  };

  const reset = () => {
    localStorage.removeItem(applianceName);
    setModelOptions([]);
    setAppliance({});
    setIsLocalStorage(false);
  };

  return {
    appliance,
    setAppliance,
    modelOptions,
    setModelOptions,
    save,
    reset,
    isLocalStorage,
  };
};
