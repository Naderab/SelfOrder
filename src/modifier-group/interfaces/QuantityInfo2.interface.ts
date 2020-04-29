import { Document } from "mongoose";
import { Quantity3 } from "./Quantity3.interface";

  export interface QuantityInfo2 extends Document {
        overrides: any[];
        quantity: Quantity3;
    }