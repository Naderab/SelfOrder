import { Module } from '@nestjs/common';
import { ItemForModifierController } from './item-for-modifier.controller';
import { ItemForModifierService } from './item-for-modifier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemForModifierSchema } from './schema/item-for-modifier.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ItemForModifier', schema: ItemForModifierSchema }]),
  ],
  controllers: [ItemForModifierController],
  providers: [ItemForModifierService]
})
export class ItemForModifierModule {}
