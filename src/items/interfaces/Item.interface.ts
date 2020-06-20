import { Document } from 'mongoose';

import { NutritionalInfo } from './nutritional-info';
import { PriceInfo } from './price-info.interface';
import { TaxInfo } from './tax-info.interface';
import { QuantityInfo } from '../../modifier-group/interfaces/quantity-info.interface';
import { ModifierGroupsRules } from './modifier-groups-rules.interface';

export interface Item extends Document {
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
