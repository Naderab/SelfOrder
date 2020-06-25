import { Price } from '../interfaces/item-for-modifier.interface';

export class ItemforModifierDto {
  id: string;
  title: string;
  externaldata: string;
  quantity: number;
  price: Price;
  defaultquantity: number;
}
