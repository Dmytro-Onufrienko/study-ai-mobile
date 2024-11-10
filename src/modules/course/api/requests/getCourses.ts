import { ApiRoutes } from "@config/ApiRoutes"

export const getCourses = () => ({
  method: "GET",
  url: ApiRoutes.COURSE,
})