import { Document } from 'mongoose';

export interface TimePeriod extends Document {
  start_time: string;
  end_time: string;
}
