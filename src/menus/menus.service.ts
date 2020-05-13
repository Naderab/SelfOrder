import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './interfaces/Menu.interface';
import { Model } from 'mongoose';
import { MenuDto } from './dto/menueDto';

@Injectable()
export class MenusService {
  constructor(@InjectModel('Menu') private MenuModel: Model<Menu>) { }

  async addMenue(menuDto: MenuDto): Promise<Menu> {
    const Menu = new this.MenuModel(menuDto);
    return await Menu.save();
  }
  async getMenus(): Promise<Menu[]> {
    try {
      return await this.MenuModel.find()
        .populate({
          path: 'category_ids',
          populate: [{
            path: 'items',
            model: 'Item'
          }]
        }).exec();
    } catch (error) {
      throw new NotFoundException('No Menus Found');
    }
  }
  async getMenuById(id: string): Promise<Menu> {
    const Menu = await this.MenuModel.findOne({ _id: id });
    if (Menu) {
      return Menu;
    } else {
      throw new NotFoundException('No Menu Found');
    }
  }
  async deleteMenu(id: string) {
    try {
      await this.MenuModel.findOneAndDelete({ __id: id });
    } catch (error) {
      throw new NotFoundException('Menu Not Found');
    }
  }
  async addCategoryToMenu(idM:string,IdC:string):Promise<Menu>{
    return await this.MenuModel.findOneAndUpdate({"_id":idM},{$push:{'category_ids':IdC}}).populate('category_ids');

}
}
