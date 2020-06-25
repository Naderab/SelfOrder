import { Controller, Get, Delete, Post, Param, Body } from '@nestjs/common';
import { ItemForModifierService } from './item-for-modifier.service';
import { ItemForModifier } from './interfaces/item-for-modifier.interface';
import { ItemforModifierDto } from './dto/item-for--modifier.dto';

@Controller('item-for-modifier')
export class ItemForModifierController {
  constructor(private ItemforMservice: ItemForModifierService) {}

  @Get('/all')
  getallitems(): Promise<ItemForModifier[]> {
    return this.ItemforMservice.getItemsForModifier();
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: string) {
    this.ItemforMservice.removeItemforModifier(id);
  }
  @Post('/add')
  createItem(@Body() createItem: ItemforModifierDto): Promise<ItemForModifier> {
    return this.ItemforMservice.createItemForModifier(createItem);
  }
  @Get('/:id')
  getItemByid(@Param('id') id: string): Promise<ItemForModifier> {
    return this.ItemforMservice.getItemForModifierById(id);
  }
}
