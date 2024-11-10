import { ApiRoutes } from "@config/ApiRoutes"
import { IGetCourse } from "@modules/course/interfaces/IGetCourse"

export const getCorse = ({ courseId }: IGetCourse) => ({
  method: "GET",
  url: `${ApiRoutes.COURSE}/${courseId}`
})