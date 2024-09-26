import { ApiRoutes } from "@constants/ApiRoutes";

export const getCurrentUser = () => ({
  method: 'GET',
  url: ApiRoutes.GET_CURRENT_USER,
})