import { ApiRoutes } from "@constants/ApiRoutes"

export const getCourses = () => ({
  method: "GET",
  url: ApiRoutes.COURSE,
})