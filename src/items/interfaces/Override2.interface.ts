import { Document } from "mongoose";

export interface Override2 extends Document {
    context_type: string;
    context_value: string;
    price: number;
}
