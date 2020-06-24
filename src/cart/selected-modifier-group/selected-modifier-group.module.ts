import { Module } from '@nestjs/common';
import { SelectedModifierGroupController } from './selected-modifier-group.controller';
import { SelectedModifierGroupService } from './selected-modifier-group.service';
import { SelectedModifierGroupSchema } from './schema/selected-modifier-group.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SelectedModifierGroup', schema: SelectedModifierGroupSchema }]),
  ],
  controllers: [SelectedModifierGroupController],
  providers: [SelectedModifierGroupService]
})
export class SelectedModifierGroupModule {}
