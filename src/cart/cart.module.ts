import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ItemForModifierModule } from './item-for-modifier/item-for-modifier.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schema/cart.schema';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [ItemForModifierModule, MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }])]
})
export class CartModule {}
