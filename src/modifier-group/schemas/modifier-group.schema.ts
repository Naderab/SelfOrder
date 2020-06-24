/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const ModifierGroupSchema = new mongoose.Schema({
  quantity_info: {
    overrides: [
      {
        context_type: String,
        context_value: String,
        quantity: {
          max_permitted: Number,
          min_permitted: Number,
          default_quantity: mongoose.Schema.Types.Mixed,
          charge_above: mongoose.Schema.Types.Mixed,
          refund_under: mongoose.Schema.Types.Mixed,
        },
      },
    ],
    quantity: {
      max_permitted: Number,
      min_permitted: Number,
      default_quantity: mongoose.Schema.Types.Mixed,
      charge_above: mongoose.Schema.Types.Mixed,
      refund_under: mongoose.Schema.Types.Mixed,
    },
  },
  title: String,
  external_data: String,
  modifier_options: [
    {
      id: { types: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      type: String
    },
  ],
  display_type: mongoose.Schema.Types.Mixed,
  id: String,
});