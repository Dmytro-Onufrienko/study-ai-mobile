import { IBaseEntity } from "@modules/common/interfaces/IBaseEntity";
import { ITopic } from "@modules/topic/interfaces/ITopic";

export interface ICourse extends IBaseEntity {
  name: string;
  topics: ITopic[];
}