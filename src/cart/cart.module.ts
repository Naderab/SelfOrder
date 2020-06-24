import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ItemForModifierModule } from './item-for-modifier/item-for-modifier.module';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [ItemForModifierModule]
})
export class CartModule {}
