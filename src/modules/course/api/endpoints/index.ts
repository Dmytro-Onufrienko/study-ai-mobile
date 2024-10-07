import { internalApi } from "store/api";
import { getCourses } from "../requests";

const courseApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getCourses: build.query<any, void>({
      query: getCourses
    })
  })
})

export const { useGetCoursesQuery } = courseApi;