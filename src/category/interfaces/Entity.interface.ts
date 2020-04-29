import { Document } from "mongoose";

export interface Entity extends Document {
    type: string;
    id: string;
}