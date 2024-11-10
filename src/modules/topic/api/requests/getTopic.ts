import { ApiRoutes } from "@config/ApiRoutes"
import { IGetTopic } from "@modules/topic/interfaces/IGetTopic"

export const getTopic = ({ topicId }: IGetTopic) => ({
  method: "GET",
  url: `${ApiRoutes.TOPIC}/${topicId}`
})