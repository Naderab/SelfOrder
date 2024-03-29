import { ItemForModifier } from "src/cart/item-for-modifier/interfaces/item-for-modifier.interface";
import { Document } from "mongoose";

export interface SelectedModifierGroup extends Document {
    id: string;
    title: string;
    external_data: string;
    selected_items: ItemForModifier[];
    removed_items: ItemForModifier[];
  }
  
  
