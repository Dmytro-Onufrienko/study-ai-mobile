import { internalApi } from "store/api";
import { getTopic } from "../requests";
import { ITopic } from "@modules/topic/interfaces/ITopic";
import { IGetTopic } from "@modules/topic/interfaces/IGetTopic";

const topicApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getTopic: build.query<ITopic, IGetTopic>({
      query: (params) => getTopic(params)
    })
  }),
})

export const { useGetTopicQuery } = topicApi;