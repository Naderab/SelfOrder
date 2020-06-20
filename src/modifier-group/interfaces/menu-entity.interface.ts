import { Document } from "mongoose";

enum MenuEntityEnum {
    ITEM = "ITEM",
    MODIFIER_GROUP = "MODIFIER_GROUP",
}
export interface MenuEntity extends Document {
    type: MenuEntityEnum;
    id: string;
}