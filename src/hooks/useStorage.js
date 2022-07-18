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

  // clear internal state on params change
  useEffect(() => {
    setModelOptions([]);
    setAppliance({});
    setLocalItem(parseLocalData?.[applianceName]);
  }, [applianceName, parentPath]);

  useEffect(() => {
    if (localItem) {
      const { options, configuration } = localItem || {};
      // clear internal state on params change
      setModelOptions(options);
      setAppliance(configuration);
    }
  }, [localItem]);

  const save = (modelPricing) => {
    const filterPrice =
      typeof modelPricing?.usa === 'object'
        ? modelPricing?.usa[appliance['style']?.id]
        : modelPricing?.usa;

    let storeData = {
      [applianceName]: {
        options: modelOptions,
        configuration: {
          ...appliance,
          modelPricing: { ...modelPricing, usa: filterPrice },
        },
      },
    };
    if (localData) {
      storeData = {
        ...parseLocalData,
        [applianceName]: {
          options: modelOptions,
          configuration: {
            ...appliance,
            modelPricing: { ...modelPricing, usa: filterPrice },
          },
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
