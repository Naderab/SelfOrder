import { SelectedModifierGroup } from "src/cart/selected-modifier-group/interfaces/Selected-Modifier-Group.interface";

export interface SelectedItem {
    id: string;
    title: string;
    external_data: string;
    quantity: number;
    price: Price;
    selected_modifier_groups: SelectedModifierGroup[];
    special_instructions: string;
  }
  export interface Price {
    unit_price: number;
    total_price: number;
  }