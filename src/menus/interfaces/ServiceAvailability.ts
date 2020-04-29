import { Document } from "mongoose";
import { TimePeriod } from "./TimePeriod";

export interface ServiceAvailability extends Document {
    time_periods: TimePeriod[];
    day_of_week: string;
}
