/* eslint-disable */
import { useEffect, useState } from 'react';
// import { useAppData } from './useAppData';

export const useStorage = (parentPath = '', applianceName = '') => {
  const [localItem, setLocalItem] = useState(null);
  const [modelOptions, setModelOptions] = useState([]);
  const [appliance, setAppliance] = useState({});

  // const { appDataState } = useAppData();
  // const { configuredData } = appDataState;
  // const configuredApplianceData = configuredData?.[applianceName];

  const localData = localStorage.getItem(parentPath);
  const parseLocalData = JSON.parse(localData);

  useEffect(() => {
    setModelOptions([]);
    setAppliance({});
    setLocalItem(parseLocalData?.[applianceName]);
  }, [applianceName]);

  useEffect(() => {
    if (localItem) {
      const { options, configuration } = localItem || {};
      // clear internal state on params change
      setModelOptions(options);
      setAppliance(configuration);
    }
  }, [localItem]);

  const save = (modelPricing) => {
    let storeData = {
      [applianceName]: {
        options: modelOptions,
        configuration: { ...appliance, modelPricing },
      },
    };
    if (localData) {
      storeData = {
        ...parseLocalData,
        [applianceName]: {
          options: modelOptions,
          configuration: { ...appliance, modelPricing },
        },
      };
    }
    localStorage.setItem(parentPath, JSON.stringify(storeData));
    setLocalItem(storeData?.[applianceName]);
  };

  const reset = () => {
    const updatedItem = parseLocalData;
    delete parseLocalData?.[applianceName];
    localStorage.setItem(parentPath, JSON.stringify(updatedItem));
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
