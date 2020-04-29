import { Document } from "mongoose";

export interface NutritionalInfo extends Document  {
    allergens?: any;
    kilojoules?: any;
    calories?: any;
}