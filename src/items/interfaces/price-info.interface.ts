import { Document } from "mongoose";
import { PriceOverride } from "./price-override.interface";

export interface PriceInfo extends Document {
    price: number;
    overrides: PriceOverride[];
}