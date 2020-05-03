import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModifierGroup } from './interfaces/ModifierGroup.interface';
import { CreateModifierGroupDto } from './dto/modifierGroupDto';

@Injectable()
export class ModifierGroupService {
    constructor(
        @InjectModel('ModifierGroup') private ModifierGroupModel: Model<ModifierGroup>
        ) {}
        async addModifierGroup(ModifierGroup :CreateModifierGroupDto):Promise<ModifierGroup>{
            const mg = new this.ModifierGroupModel(ModifierGroup);
            return await mg
            .save();
        }
        async getallMg():Promise<ModifierGroup[]>{
            try {
                return await this.ModifierGroupModel.find();
            } catch (error) {
                throw new NotFoundException('No Modifier Groups Found');
                
            }

        }
        async getById(id:string):Promise<ModifierGroup>{

            try {
                return await this.ModifierGroupModel.findOne({'_id':id})
            } catch (error) {
                throw new NotFoundException('Modifier Group not found ')
            }
        }
        async deleteMg(id:string){
            await this.ModifierGroupModel.remove({id});
        }
        
}
