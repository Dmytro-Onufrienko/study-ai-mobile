import { createApi } from '@reduxjs/toolkit/query/react';
import { reAuthQuery } from './reAuth.';


export const internalApi = createApi({
  baseQuery: reAuthQuery,
  endpoints: () => ({}),
  tagTypes: ['Courses']
  
});

export const internalApiReducerPath = internalApi.reducerPath;
export const internalApiReducer = internalApi.reducer;
