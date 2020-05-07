import * as mongoose from 'mongoose';
import { ItemSchema } from 'src/items/schemas/item.schema';

export const CategorySchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  title: String,
});
