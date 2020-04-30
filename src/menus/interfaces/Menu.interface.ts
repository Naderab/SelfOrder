import { Document } from "mongoose";
import { ServiceAvailability } from "./ServiceAvailability";

export interface Menu extends Document {
    service_availability: ServiceAvailability[];
    category_ids: string[];
    title: string;
}