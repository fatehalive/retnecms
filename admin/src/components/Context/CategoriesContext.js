import React, { createContext, useCallback, useContext, useState } from 'react';
import { isEqual, isFunction } from 'lodash';

const CategoriesUIContext = createContext();

export function useCategoriesUIContext() {
  return useContext(CategoriesUIContext);
}

export const CategoriesUIConsumer = CategoriesUIContext.Consumer;

let params = {
  pageNumber: 1,
  pageSize: 10,
  filter: {
    category_name: ''
  }
}

export function CategoriesUIProvider({ children }) {
  const [queryParams, setQueryParamsBase] = useState(params);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParams,
  };

  return (
    <CategoriesUIContext.Provider value={value}>
      {children}
    </CategoriesUIContext.Provider>
  );
}
