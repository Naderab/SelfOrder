import { QuantityInfo2 } from "../interfaces/QuantityInfo2.interface";
import { ModifierOption } from "../interfaces/ModifierOptions.interface";

export class CreateModifierGroupDto {
    quantity_info: QuantityInfo2;
    title: string;
    external_data: string;
    modifier_options: ModifierOption[];
    display_type?: any;
    id: string;
}