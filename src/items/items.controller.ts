import { Controller, Get, Param, Delete, Body, Post } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/createItemDto';

@Controller('/api/items')
export class ItemsController {
    constructor(private ItemService:ItemsService){}

    @Get('/:id')
    getItemByid(@Param('id') id:string):Promise<Item>{
        return  this.ItemService.getItemById(id);

    }
    @Get('/all')
    getallitems():Promise<Item[]>{
        return this.ItemService.getItems();
    }
    @Delete('/:id')
    deleteItem(@Param('id') id:string)
    {
        this.ItemService.deleteItem(id);
    }
    @Post('/add')
    createItem(@Body()createItemdto:CreateItemDto):Promise<Item>{
        return this.ItemService.createItem(createItemdto);
    }
}
