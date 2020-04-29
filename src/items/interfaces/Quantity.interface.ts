import { Document } from "mongoose";

export interface Quantity  extends Document {
    max_permitted: number;
    min_permitted?: any;
    default_quantity?: any;
    charge_above?: any;
    refund_under?: any;
}