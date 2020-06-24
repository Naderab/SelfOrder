
import * as mongoose from 'mongoose';

export const SelectedItemSchema = new mongoose.Schema({

title: String,
externaldata: String,
quantity: Number,
price: {
    unitprice: Number,
    totalprice: Number,
},
selectedmodifiergroups:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'SelectedModifierGroup' }],
specialinstructions: String,
})