import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenuDto } from './dto/menueDto';
import { Menu } from './interfaces/Menu.interface';

@Controller('/api/menus')
export class MenusController {
  constructor(private menuService: MenusService) {}

  @Post('/add')
  createMenu(@Body() menuDto: MenuDto): Promise<Menu> {
    console.log(menuDto);
    return this.menuService.addMenue(menuDto);
  }

  @Get('/all')
  getALl(): Promise<Menu[]> {
    return this.menuService.getMenus();
  }

  @Get('/:id')
  gebyIdl(@Param('id') id: string): Promise<Menu> {
    return this.menuService.getMenuById(id);
  }
  @Delete('/:id')
  DeleteMenu(@Param('id') id: string) {
    this.menuService.deleteMenu(id);
  }
  @Put('/:id')
  addCategoryToMEnu(@Param('id') id:string,@Body('idC') idC:string ):Promise<Menu>{
    return this.menuService.addCategoryToMenu(id,idC);
  }
}
