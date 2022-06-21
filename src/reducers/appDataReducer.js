/* eslint-disable */
export const initialState = {
  data: null,
  applianceData: null,
  configuredData: {},
};

const appDataReducer = (state, { type, data }) => {
  switch (type) {
    case 'KITCHEN_DATA':
      return { ...state, data };
    case 'APPLIANCE_DATA':
      return { ...state, applianceData: data };
    case 'CONFIGURED_DATA':
      return {
        ...state,
        configuredData: {
          ...state.configuredData,
          [data.applianceName]: {
            ...state.configuredData?.[data.applianceName],
            ...data.configuredData,
          },
        },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default appDataReducer;
