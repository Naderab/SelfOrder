import { Document } from "mongoose";
import { Item } from "../items/interfaces/Item.interface";
import { DisplayOptions } from "./DisplayOptions.interface";
import { Menu } from "../menus/interfaces/Menu.interface";
import { Category } from "../category/interfaces/Category.interfaces";
import { ModifierGroup } from "../modifier-group/interfaces/ModifierGroup.interface";

    export interface RootObject extends Document {
        items: Item[];
        display_options: DisplayOptions;
        menus: Menu[];
        categories: Category[];
        modifier_groups: ModifierGroup[];
    }