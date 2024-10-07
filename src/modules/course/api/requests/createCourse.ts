import { ApiRoutes } from "@constants/ApiRoutes";
import { ICreateCourse } from "@modules/course/interfaces/ICreateCourse";

export const createCourse = (body: ICreateCourse) => ({
  method: "POST",
  url: ApiRoutes.COURSE,
  body,
})