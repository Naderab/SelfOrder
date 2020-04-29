import { Module } from '@nestjs/common';
import { ModifierGroupController } from './modifier-group.controller';
import { ModifierGroupService } from './modifier-group.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModifierGroupSchema } from './schemas/ModifierGroup.schema';
import { ModifierOptionsSchema } from './schemas/ModifierOptions.schema';
import { Quantity3Schema } from './schemas/Quantity3.schema';
import { QuantityInfo2Schema } from './schemas/QuantityInfo2.schema';

@Module({ 
  imports:[ MongooseModule.forFeature([
    { name: 'ModifierGroup', schema: ModifierGroupSchema },
    { name: 'ModifierOption', schema: ModifierOptionsSchema },
    { name: 'Quantity3', schema: Quantity3Schema },
    { name: 'QuantityInfo2', schema: QuantityInfo2Schema },])],
  controllers: [ModifierGroupController],
  providers: [ModifierGroupService]
})
export class ModifierGroupModule {}
