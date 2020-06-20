import { Document } from "mongoose";
import { Quantity } from "./quantity.interface";

enum ContextType {
    ITEM = "ITEM",
    MODIFIER_GROUP = "MODIFIER_GROUP",
    MENU = "Menu"
}

export interface QuantityConstraintOverride extends Document {
    context_type: ContextType;
    context_value: string;
    quantity: Quantity;
}