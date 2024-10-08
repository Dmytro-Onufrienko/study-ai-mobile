import { IBaseEntity } from "@modules/common/interfaces/IBaseEntity";

export interface ISubtopic extends IBaseEntity {
  name: string;
  material: string;
}