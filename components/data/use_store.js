import React from 'react';

export const StoreContext = React.createContext(null);

export const useStore = () => React.useContext(StoreContext);

export const Provider = StoreContext.Provider;
