import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './interfaces/Menu.interface';
import { Model } from 'mongoose';
import { MenuDto } from './dto/menueDto';

@Injectable()
export class MenusService {
    constructor(
        @InjectModel('Menu') private MenuModel: Model<Menu>
        ) {}


        async addMenue(menuDto :MenuDto):Promise<Menu>{

            const {}=menuDto;
   
         
            
            const Menu = new this.MenuModel(menuDto);
          
            return await Menu.save();
        }
}
