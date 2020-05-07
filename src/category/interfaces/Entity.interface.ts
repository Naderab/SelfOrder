import { Document } from 'mongoose';

export interface Entity extends Document {
  item: string;
}
