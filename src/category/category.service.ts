import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './interfaces/Category.interfaces';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/createCategoryDto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private CategoryModel: Model<Category>
        ) {}
        async createCat(CreateCategoryDto: CreateCategoryDto):Promise<Category>{
            const cat= new this.CategoryModel(CreateCategoryDto);
            return await cat.save();
        }
        async getCategories():Promise<Category[]>{
            return await this.CategoryModel.find();
        }
        async getCatById(_id:string):Promise<Category>{
          const cat=await this.CategoryModel.findOne({_id:_id});
          if(!cat){
              throw new NotFoundException('category not found');
          }

            return cat;
        }
        async deletecat(_id:string):Promise<void>{
            const item=await this.getCatById(_id);
            await this.CategoryModel.remove({_id});
        }
        async updateItemById(id:string,createItem:CreateCategoryDto):Promise<Category>{
            const item=await this.getCatById(id);
            if(item){
                return await this.CategoryModel.findOneAndUpdate({id},{$set:createItem});
            }
        }
}
