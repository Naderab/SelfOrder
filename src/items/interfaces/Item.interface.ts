import { Document } from 'mongoose';

import { NutritionalInfo } from './NutritionalInfo';
import { QuantityInfo } from './QuantityInfo.interface';
import { ModifierGroupIds } from './ModifierGroupIds.interface';
import { PriceInfo } from './PriceInfo.interface';
import { TaxInfo } from './Taxinfo.interface';

export interface Item extends Document {
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
