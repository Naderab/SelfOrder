import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenuDto } from './dto/menueDto';
import { Menu } from './interfaces/Menu.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/menus')
export class MenusController {
    constructor(private menuService:MenusService){}

    @Post('/add')
    createMenu(@Body() menuDto:MenuDto):Promise<Menu>{
        console.log(menuDto)
        return this.menuService.addMenue(menuDto);
            }

            @Get('/test')
            test(){
                console.log("test")
            }
            @Post('/test')
            @UseGuards(AuthGuard())
            tes2t(@Req() req){
                console.log(req);
        
            }
}
