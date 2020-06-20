import { Document } from "mongoose";


enum ContextType {
    ITEM = "ITEM",
    MODIFIER_GROUP = "MODIFIER_GROUP",
    MENU = "Menu"
}
export interface PriceOverride extends Document {
    context_type: ContextType;
    context_value: string;
    price: number;
}
