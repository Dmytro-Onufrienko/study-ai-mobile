import { internalApi } from "store/api";
import { createCourse, getCourses } from "../requests";
import { ICreateCourse } from "@modules/course/interfaces/ICreateCourse";

const courseApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getCourses: build.query<any, void>({
      query: getCourses,
      providesTags: ['Courses']  
    }),
    createCourse:build.mutation<any, ICreateCourse>({
      query: (body) => createCourse(body),
      invalidatesTags: ['Courses']
    })
  })
})

export const { useGetCoursesQuery, useCreateCourseMutation } = courseApi;