import { Document } from "mongoose";
import { Override } from "./Override.interface";



export interface QuantityInfo extends Document {
    overrides: Override[];
    quantity: number;
}