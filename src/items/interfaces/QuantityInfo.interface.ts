import { Document } from "mongoose";
import { Override } from "./Override.interface";
import { Quantity3 } from "./Quantity3.interface";



export interface QuantityInfo extends Document {
    overrides: Override[];
    quantity: Quantity3;
}