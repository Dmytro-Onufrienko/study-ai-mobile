
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { storageService } from '@services/Storage';

import { baseWithoutHeadersQuery } from './baseQuery';

export const refreshQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (_args, api, extraOptions) => {
  const refreshToken = (await storageService.getTokens())?.refreshToken;

  if (!refreshToken) {
    throw new Error('No refresh token found on device');
  }

  const refreshArgs = {
    url: "auth/refresh-token",
    method: "POST",
    body: { refreshToken },
  };

  return baseWithoutHeadersQuery(refreshArgs, api, extraOptions);
};
