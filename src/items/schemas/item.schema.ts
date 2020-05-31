/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  description: String,
  title: String,
  nutritional_info: {
    allergens: mongoose.Schema.Types.Mixed,
    kilojoules: mongoose.Schema.Types.Mixed,
    calories: mongoose.Schema.Types.Mixed,
  },
  quantity_info: {
    overrides: [mongoose.Schema.Types.Mixed],
    quantity: {
      max_permitted: Number,
      min_permitted: Number,
      default_quantity: mongoose.Schema.Types.Mixed,
      charge_above: mongoose.Schema.Types.Mixed,
      refund_under: mongoose.Schema.Types.Mixed,
    },
  },
  external_data: mongoose.Schema.Types.Mixed,
  suspension_info: mongoose.Schema.Types.Mixed,
  modifier_group_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'ModifierGroup' },
  ],
  image_url: mongoose.Schema.Types.Mixed,
  price_info: {
    price: Number,
    overrides: [
      {
        context_type: String,
        context_value: String,
        price: Number,
      },
    ],
  },
  tax_info: {
    tax_rate: mongoose.Schema.Types.Mixed,
    vat_rate_percentage: mongoose.Schema.Types.Mixed,
  },
});
