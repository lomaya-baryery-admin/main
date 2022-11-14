import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../redux-store';

export const withStore = (WrappedComponent: React.ComponentType): React.FunctionComponent => {
  return () => {
    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    );
  };
};
