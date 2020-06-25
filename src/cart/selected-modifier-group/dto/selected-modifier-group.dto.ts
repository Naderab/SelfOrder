import { ItemForModifier } from "src/cart/item-for-modifier/interfaces/item-for-modifier.interface";

export class SelectedModifierGroupDto {
    id: string;
    title: string;
    external_data: string;
    selected_items: ItemForModifier[];
    removed_items: ItemForModifier[];
  }