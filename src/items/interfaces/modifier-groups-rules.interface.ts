import { Document } from "mongoose";
import { ModifierGroupsOverride } from "./modifer-groups-override.interface copy";

export interface ModifierGroupsRules extends Document {
    overrides: ModifierGroupsOverride[];
    ids: string[];
}