import * as mongoose from 'mongoose';

export const ItemForModifierSchema = new mongoose.Schema({
    title: String,
    externaldata: String,
    quantity: Number,
    price: {
        unitprice: Number,
        totalprice: Number,
    },
    defaultquantity: Number
})