import { Controller, Param, Get, Delete, Post, Body, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './interfaces/Category.interfaces';
import { CreateCategoryDto } from './dto/createCategoryDto';

@Controller('/api/category')
export class CategoryController {
  constructor(private catservice: CategoryService) {}

  @Get('/all')
  getallitems(): Promise<Category[]> {
    return this.catservice.getCategories();
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: string) {
    this.catservice.deletecat(id);
  }
  @Post('/add')
  createItem(@Body() createcat: CreateCategoryDto): Promise<Category> {
    return this.catservice.createCat(createcat);
  }
  @Get('/:id')
  getItemByid(@Param('id') id: string): Promise<Category> {
    return this.catservice.getCatById(id);
  }
  @Put('/:id')
  addItem(@Param('id') id:string,@Body('idi') idi:string ):Promise<Category>{
    return this.catservice.addItemToCategory(id,idi);
  }
}
