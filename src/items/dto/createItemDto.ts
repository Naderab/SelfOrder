import { NutritionalInfo } from '../interfaces/NutritionalInfo';
import { QuantityInfo } from '../interfaces/QuantityInfo.interface';
import { ModifierGroupIds } from '../interfaces/ModifierGroupIds.interface';
import { PriceInfo } from '../interfaces/PriceInfo.interface';
import { TaxInfo } from '../interfaces/Taxinfo.interface';

export class CreateItemDto {
  description: string;
  title: string;
  nutritional_info: NutritionalInfo;
  quantity_info: QuantityInfo;
  external_data?: any;
  suspension_info?: any;
  modifier_group_ids: any[];
  image_url?: any;
  price_info: PriceInfo;
  tax_info: TaxInfo;
}
