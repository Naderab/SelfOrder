import { Document } from "mongoose";

export interface ModifierOption extends Document {
    type: string;
    id: string;
}