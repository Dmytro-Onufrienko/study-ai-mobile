import { ApiRoutes } from "@config/ApiRoutes";

export const getCurrentUser = () => ({
  method: 'GET',
  url: ApiRoutes.GET_CURRENT_USER,
})