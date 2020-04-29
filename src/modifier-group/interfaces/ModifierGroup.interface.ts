import { Document } from "mongoose";
import { QuantityInfo2 } from "./QuantityInfo2.interface";
import { ModifierOption } from "./ModifierOptions.interface";

export interface ModifierGroup extends Document {
    quantity_info: QuantityInfo2;
    title: string;
    external_data: string;
    modifier_options: ModifierOption[];
    display_type?: any;
    id: string;
}