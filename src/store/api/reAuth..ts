import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { storageService } from '@services/Storage';
import { Mutex } from 'async-mutex';

import { baseQuery } from './baseQuery';
import { refreshQuery } from './refresh';
import { IAuthTokens } from '@modules/auth/interfaces/IAuthTokens';
const mutex = new Mutex();

export const reAuthQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  const { endpoint } = api;
  const isGetCurrentUserRequest = endpoint === 'getCurrentUser';
  if (isGetCurrentUserRequest) {
    const authTokens = await storageService.getTokens();
    !authTokens && api.abort('no token');
  }

  const initialQueryResponse = await baseQuery(args, api, extraOptions);
  const { error } = initialQueryResponse;

  if (!error) {
    return initialQueryResponse;
  }

  const { status } = error;
  const isUnauthorizedError = status === 401;

  if (isUnauthorizedError) {
    const isMutextLocked = mutex.isLocked();

    if (isMutextLocked) {
      await mutex.waitForUnlock();
      return await baseQuery(args, api, extraOptions);
    } else {
      const releaseMutex = await mutex.acquire();
      try {
        const { data: newTokens } = await refreshQuery(args, api, extraOptions);
        await storageService.setTokens(newTokens as IAuthTokens);
        return await baseQuery(args, api, extraOptions);
      } catch (e) {
        const error = e as { status?: number };
        if (error.status === 401) {
          storageService.setTokens(null);
        }
      } finally {
        releaseMutex();
      }
    }
  }

  return initialQueryResponse;
};

