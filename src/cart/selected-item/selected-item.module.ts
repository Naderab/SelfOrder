import { Module } from '@nestjs/common';
import { SelectedItemController } from './selected-item.controller';
import { SelectedItemService } from './selected-item.service';
import { SelectedItemSchema } from './schema/selected-item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SelectedItem', schema: SelectedItemSchema }]),
  ],
  controllers: [SelectedItemController],
  providers: [SelectedItemService]
})
export class SelectedItemModule {}
