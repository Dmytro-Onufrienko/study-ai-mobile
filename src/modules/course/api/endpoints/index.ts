import { internalApi } from "store/api";
import { createCourse, getCorse, getCourses } from "../requests";
import { ICreateCourse } from "@modules/course/interfaces/ICreateCourse";
import { IGetCourse } from "@modules/course/interfaces/IGetCourse";
import { ICourse } from "@modules/course/interfaces/ICourse";

const courseApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getCourses: build.query<ICourse[], void>({
      query: getCourses,
      providesTags: ['Courses']  
    }),
    createCourse: build.mutation<any, ICreateCourse>({
      query: (body) => createCourse(body),
      invalidatesTags: ['Courses']
    }),
    getCourse: build.query<ICourse, IGetCourse>({
      query: (params) => getCorse(params)
    })
  }),
})

export const { useGetCoursesQuery, useCreateCourseMutation, useGetCourseQuery } = courseApi;