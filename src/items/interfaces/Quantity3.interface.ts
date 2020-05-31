import { Document } from "mongoose";

export interface Quantity3  extends Document{
    max_permitted: number;
    min_permitted: number;
    default_quantity?: any;
    charge_above?: any;
    refund_under?: any;
}