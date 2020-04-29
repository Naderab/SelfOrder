import { Document } from "mongoose";
import { Override2 } from "./Override2.interface";

export interface PriceInfo extends Document {
    price: number;
    overrides: Override2[];
}