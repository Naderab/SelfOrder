import { Document } from "mongoose";
import { Quantity } from "./quantity.interface";
import { QuantityConstraintOverride } from "./quantity-constraint-override.interface";

  export interface QuantityInfo extends Document {
        overrides: QuantityConstraintOverride[];
        quantity: Quantity;
    }

    