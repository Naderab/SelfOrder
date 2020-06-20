import { Document } from "mongoose";

export interface Quantity extends Document{
    max_permitted: number;
    min_permitted: number;
    default_quantity?: number;
    charge_above?: number;
    refund_under?: number;
}