import { IBaseEntity } from "@modules/common/interfaces/IBaseEntity";
import { ISubtopic } from "@modules/subtopic/interfaces/ISubtopic";

export interface ITopic extends IBaseEntity {
  name: string;
  subtopics: ISubtopic[];
}