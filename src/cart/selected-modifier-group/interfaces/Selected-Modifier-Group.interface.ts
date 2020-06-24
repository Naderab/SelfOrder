import { ItemforModifier } from "src/cart/item-for-modifier/interfaces/item-for-modifier.interface";

export interface SelectedModifierGroup {
    id: string;
    title: string;
    external_data: string;
    selected_items: ItemforModifier[];
    removed_items: ItemforModifier[];
  }
  
  
