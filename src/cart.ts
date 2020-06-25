
export interface Price {
  unit_price: number;
  total_price: number;
}
export interface ItemforModifier {
  id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  default_quantity: number;
}

export interface SelectedModifierGroup {
  id: string;
  title: string;
  external_data: string;
  selected_items: ItemforModifier[];
  removed_items: ItemforModifier[];
}

export interface SelectedItem {
  id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  selected_modifier_groups: SelectedModifierGroup[];
  special_instructions: string;
}


