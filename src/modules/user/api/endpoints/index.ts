import { internalApi } from "store/api";
import { getCurrentUser } from "../requests";

const userApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getCurrentUser: build.query({
      query: getCurrentUser
    })
  }),
});

export const { useGetCurrentUserQuery, useLazyGetCurrentUserQuery } = userApi;