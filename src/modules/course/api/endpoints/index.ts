import { internalApi } from "store/api";
import { getCourses } from "../requests";

const courseApi = internalApi.injectEndpoints({
  endpoints: build => ({
    courses: build.query({
      query: getCourses
    })
  })
})

export const { useCoursesQuery } = courseApi;