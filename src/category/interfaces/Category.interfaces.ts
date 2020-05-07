import { Document } from 'mongoose';
import { Entity } from './Entity.interface';

export interface Category extends Document {
  items: any[];
  title: string;
}
