import { Document } from "mongoose";
import { Entity } from "./Entity.interface";

export interface Category extends Document {
    entities: Entity[];
  
    title: string;
}