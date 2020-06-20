import { QuantityInfo } from "../interfaces/quantity-info.interface";
import { MenuEntity } from "../interfaces/menu-entity.interface";

export class CreateModifierGroupDto {
    quantity_info: QuantityInfo;
    title: string;
    external_data: string;
    modifier_options: MenuEntity[];
    display_type?: any;
    id: string;
}