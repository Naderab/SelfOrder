import { Document } from "mongoose";
import { QuantityInfo } from "./quantity-info.interface";
import { MenuEntity } from "./menu-entity.interface";

export interface ModifierGroup extends Document {
    quantity_info: QuantityInfo;
    title: string;
    external_data: string;
    modifier_options: MenuEntity[];
    display_type?: any;
    id: string;
}