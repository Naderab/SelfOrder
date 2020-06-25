import { SelectedItem } from "../selected-item/interfaces/Selected-Item.interface";
import { Document } from "mongoose";

export interface Cart extends Document {
    items: SelectedItem[];
    placed_at: Date;
    totale: number;
  }