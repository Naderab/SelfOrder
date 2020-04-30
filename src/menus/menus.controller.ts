import { Controller, Post, Body, Get} from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenuDto } from './dto/menueDto';
import { Menu } from './interfaces/Menu.interface';


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
}
