import { Document } from "mongoose";

export interface TaxInfo extends Document {
    tax_rate?: any;
    vat_rate_percentage?: any;
}