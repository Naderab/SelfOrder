import { Entity } from "../interfaces/Entity.interface";

export class CreateCategoryDto {
    entities: Entity[];
  
    title: string;
}