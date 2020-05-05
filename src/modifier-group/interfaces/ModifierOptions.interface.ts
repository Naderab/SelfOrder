import { Document } from "mongoose";
import { StringifyOptions } from "querystring";

export interface ModifierOption extends Document{
    types:string;
    id:string;

}