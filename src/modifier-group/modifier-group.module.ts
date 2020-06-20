import { Module } from '@nestjs/common';
import { ModifierGroupController } from './modifier-group.controller';
import { ModifierGroupService } from './modifier-group.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModifierGroupSchema } from './schemas/modifier-group.schema';


@Module({ 
  imports:[ MongooseModule.forFeature([
    { name: 'ModifierGroup', schema: ModifierGroupSchema }])],
  controllers: [ModifierGroupController],
  providers: [ModifierGroupService]
})
export class ModifierGroupModule {}
