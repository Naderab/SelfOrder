import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/Item.interface';
import { CreateItemDto } from './dto/createItemDto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private ItemModel: Model<Item>) {}
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const Item = new this.ItemModel(createItemDto);
    return await Item.save();
  }
  async getItems(): Promise<Item[]> {
    return await this.ItemModel.find();
  }
  async getItemById(_id: string): Promise<Item> {
    const item = await this.ItemModel.findOne({ _id: _id });
    if (!item) {
      throw new NotFoundException('item not found');
    }

    return item;
  }
  async deleteItem(_id: string): Promise<void> {
    const item = await this.getItemById(_id);
    await this.ItemModel.remove({ _id });
  }
  async updateItemById(id: string, createItem: CreateItemDto): Promise<Item> {
    const item = await this.getItemById(id);
    if (item) {
      return await this.ItemModel.findOneAndUpdate(
        { id },
        { $set: createItem },
      );
    }
  }
}
