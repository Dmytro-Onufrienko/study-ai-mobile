import { internalApi } from "store/api";
import { getSubtopic } from "../requests";
import { IGetSubtopic, ISubtopic } from "@modules/subtopic/interfaces";

const subtopicApi = internalApi.injectEndpoints({
  endpoints: build => ({
    getSubtopic: build.query<ISubtopic, IGetSubtopic>({
      query: (params) => getSubtopic(params)
    })
  }),
})

export const { useGetSubtopicQuery } = subtopicApi;