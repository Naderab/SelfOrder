import * as mongoose from 'mongoose';

export const SelectedModifierGroupSchema = new mongoose.Schema({
    
    title: String,
    externaldata: String,
    selecteditems:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemForModifier' }],
    removeditems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemForModifier' }],
})