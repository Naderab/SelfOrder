import { Document } from "mongoose";
import { Item } from "./Item.interface";
import { DisplayOptions } from "./DisplayOptions.interface";
import { Menu } from "./Menu.interface";
import { Category } from "./Category.interfaces";
import { ModifierGroup } from "./ModifierGroup.interface";

    export interface RootObject extends Document {
        items: Item[];
        display_options: DisplayOptions;
        menus: Menu[];
        categories: Category[];
        modifier_groups: ModifierGroup[];
    }