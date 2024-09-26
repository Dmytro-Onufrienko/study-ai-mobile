import { ApiRoutes } from "@constants/ApiRoutes"

export const getCourses = ({}) => ({
  method: "POST",
  url: ApiRoutes.GET_COURSES,
})