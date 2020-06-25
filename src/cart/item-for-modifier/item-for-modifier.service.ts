import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemForModifier } from './interfaces/item-for-modifier.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemforModifierDto } from './dto/item-for--modifier.dto';

@Injectable()
export class ItemForModifierService {
  constructor(
    @InjectModel('ItemForModifier')
    private ItemForModifierModel: Model<ItemForModifier>,
  ) {}
  async createItemForModifier(
    ItemFormodifierdto: ItemforModifierDto,
  ): Promise<ItemForModifier> {
    const Item = new this.ItemForModifierModel();
    Item.title = ItemFormodifierdto.title;
    Item.price = ItemFormodifierdto.price;
    Item.quantity = ItemFormodifierdto.quantity;
    Item.externaldata = ItemFormodifierdto.externaldata;
    Item.defaultquantity = ItemFormodifierdto.defaultquantity;

    console.log(Item);
    return await Item.save();
  }
  async getItemsForModifier(): Promise<ItemForModifier[]> {
    try {
      const Items = await this.ItemForModifierModel.find();
      if (!Items) {
        throw NotFoundException;
      } else {
        return Items;
      }
    } catch (error) {
      throw Error;
    }
  }
  async getItemForModifierById(_id: string): Promise<ItemForModifier> {
    try {
      const Item = await this.ItemForModifierModel.findOne({ _id });
      if (!Item) {
        throw NotFoundException;
      } else {
        return Item;
      }
    } catch (error) {
      throw Error;
    }
  }
  async removeItemforModifier(_id:string){
      await this.ItemForModifierModel.findOneAndRemove({_id});
  }
}
