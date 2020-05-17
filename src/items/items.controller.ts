import { Controller, Get, Param, Delete, Body, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/createItemDto';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('image'))
  createItem(@Body() createItemdto: CreateItemDto,@UploadedFile() file): Promise<Item> {
    
 
      console.log(file);
      const  imageUrl=file.destination+'/'+file.filename
      return this.ItemService.createItem(createItemdto,imageUrl);
 
    
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
