import { NutritionalInfo } from '../interfaces/nutritional-info';
import { PriceInfo } from '../interfaces/price-info.interface';
import { TaxInfo } from '../interfaces/tax-info.interface';
import { QuantityInfo } from '../../modifier-group/interfaces/quantity-info.interface';
import { ModifierGroupsRules } from '../interfaces/modifier-groups-rules.interface';

export class CreateItemDto {
  description: string;
  title: string;
  nutritional_info: NutritionalInfo;
  quantity_info: QuantityInfo;
  external_data?: any;
  suspension_info?: any;
  modifier_group_ids: string[];
  image_url?: any;
  price_info: PriceInfo;
  tax_info?: TaxInfo;
}
