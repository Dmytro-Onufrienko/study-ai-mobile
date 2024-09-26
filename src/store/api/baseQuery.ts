import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { storageService } from '@services/Storage';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  prepareHeaders: async headers => {
    const accessToken = (await storageService.getTokens())?.accessToken;

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export const baseWithoutHeadersQuery = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
});

