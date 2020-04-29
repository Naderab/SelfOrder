import { Document } from "mongoose";

export interface ModifierGroupIds extends Document {
    overrides: any[];
    ids: string[];
}