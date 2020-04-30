import { Document } from "mongoose";

export interface Entity extends Document {
    types: string;
    
}
