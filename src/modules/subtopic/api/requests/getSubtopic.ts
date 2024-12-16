import { ApiRoutes } from "@config/ApiRoutes"
import { IGetSubtopic } from "@modules/subtopic/interfaces"

export const getSubtopic = ({ subtopicId }: IGetSubtopic) => ({
  method: "GET",
  url: `${ApiRoutes.SUBTOPIC}/${subtopicId}`
})