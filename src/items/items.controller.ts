import { Controller, Get, Param, Delete, Body, Post, Put } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/createItemDto';

@Controller('/api/items')
export class ItemsController {
  constructor(private ItemService: ItemsService) {}

  @Get('all')
  getallitems(): Promise<Item[]> {
    return this.ItemService.getItems();
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: string) {
    this.ItemService.deleteItem(id);
  }
  @Post('add')
  createItem(@Body() createItemdto: CreateItemDto): Promise<Item> {
    return this.ItemService.createItem(createItemdto);
  }

  @Get('/:id')
  getItemByid(@Param('id') id: string): Promise<Item> {
    return this.ItemService.getItemById(id);
  }
  @Put('/:id')
  addModifierGroupToItem(@Param('id') id:string,@Body('idMg') idMg:string ):Promise<Item>{
    return this.ItemService.addModifierGroupToItem(id,idMg);
  }
}
