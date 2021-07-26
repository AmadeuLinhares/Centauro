/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

interface LoadingProvider {
  children: ReactNode;
}

interface LoadingContextInterface {
  show: boolean;
  showLoading(value: boolean): void;
}

// eslint-disable-next-line prettier/prettier
export const LoadingContext = createContext({} as LoadingContextInterface);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LoadingProvider = ({ children }: LoadingProvider): any => {
  const [show, setShow] = useState(false);

  function showLoading(value: boolean) {
    setShow(value);
  }

  return (
    <LoadingContext.Provider value={{ showLoading, show }}>
      {children}
    </LoadingContext.Provider>
  );
};
