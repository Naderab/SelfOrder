import { Document } from "mongoose";
export interface ItemForModifier extends Document {
  id: string;
  title: string;
  externaldata: string;
  quantity: number;
  price: Price;
  defaultquantity: number;
}

export interface Price  {
  unitprice: number;
  totalprice: number;
}
