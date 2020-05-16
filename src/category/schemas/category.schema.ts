import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  title: String,
  menus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }]
});
