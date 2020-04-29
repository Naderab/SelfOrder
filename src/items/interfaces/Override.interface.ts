import { Document } from "mongoose";
import { Quantity } from "./Quantity.interface";

export interface Override extends Document {
    context_type: string;
    context_value: string;
    quantity: Quantity;
}