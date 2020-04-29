import { Document } from "mongoose";

export interface DisplayOptions extends Document {
    disable_item_instructions: boolean;
}