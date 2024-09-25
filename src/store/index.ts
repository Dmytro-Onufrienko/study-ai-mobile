
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  internalApi,
  internalApiReducer,
  internalApiReducerPath,
} from './api';

const rootReducer = combineReducers({
  [internalApiReducerPath]: internalApiReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(internalApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
