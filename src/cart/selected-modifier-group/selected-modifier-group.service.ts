import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SelectedModifierGroup } from './interfaces/Selected-Modifier-Group.interface';
import { Model } from 'mongoose';
import { SelectedModifierGroupDto } from './dto/selected-modifier-group.dto';

@Injectable()
export class SelectedModifierGroupService {
    constructor(
        @InjectModel('SelectedModifierGroup')
        private SelectedModifierGroupModel: Model<SelectedModifierGroup>,
      ) {}
      async selectmodifiergroup(smgDto:SelectedModifierGroupDto):Promise<SelectedModifierGroup>{
          const SelectedModifiergroup = new this.SelectedModifierGroupModel(smgDto);
          return await SelectedModifiergroup.save();
      }
      async removeselectedmodifiergroup(_id:string):Promise<void>
      {
         try {
            await this.SelectedModifierGroupModel.findOneAndRemove({_id});
         } catch (error) {
             console.log(error)
             throw new NotFoundException('No Modifier Groups Found');
         }
      }
      async getselectedmodifiergroups():Promise<SelectedModifierGroup[]>{
          try {
              return await this.SelectedModifierGroupModel.find();
          } catch (error) {
            throw new NotFoundException('No Modifier Groups Found');
          }
      }
      async selectItemsFormodifiergroup(item:string,_id:string):Promise<SelectedModifierGroup>{
          try {
            const smg=await this.SelectedModifierGroupModel.findByIdAndUpdate({ "_id":_id},{$push:{'selecteditems':item}}).populate('selecteditems');
            return smg
          } catch (error) {
            throw new NotFoundException('No Modifier Groups Found');
          }
      }
      async removeItemFroModifiergroup(item:string,_id:string):Promise<SelectedModifierGroup>{
        try {
          const smg=await this.SelectedModifierGroupModel.findByIdAndUpdate({ "_id":_id},{$push:{'removeditems':item}}).populate('removeditems');
          return smg
        } catch (error) {
          throw new NotFoundException('No Modifier Groups Found');
        }
    }
}
