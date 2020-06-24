export interface ItemforModifier {
    id: string;
    title: string;
    external_data: string;
    quantity: number;
    price: Price;
    default_quantity: number;
  }
  
export interface Price {
    unit_price: number;
    total_price: number;
  }