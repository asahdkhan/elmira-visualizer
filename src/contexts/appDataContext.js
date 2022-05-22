import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import appDataReducer, { initialState } from '../reducers/appDataReducer';

export const AppDataContext = createContext();

const AppDataProvider = ({ children }) => {
  const useAppDataState = useReducer(appDataReducer, initialState);
  return (
    <AppDataContext.Provider value={[...useAppDataState]}>
      {children}
    </AppDataContext.Provider>
  );
};

AppDataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppDataProvider;
