import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateModifierGroupDto } from './dto/modifierGroupDto';
import { ModifierGroup } from './interfaces/modifier-group.interface';
import { ModifierGroupService } from './modifier-group.service';

@Controller('/api/modifier-group')
export class ModifierGroupController {

    constructor(private MgService:ModifierGroupService){}
    @Post('/add')
    createMenu(@Body() menuDto:CreateModifierGroupDto):Promise<ModifierGroup>{
        console.log(menuDto)
        return this.MgService.addModifierGroup(menuDto);
            }
    @Get('/all')
    getAll():Promise<ModifierGroup[]>{
    return this.MgService.getallMg();
    }
    @Get('/:id')
    getById(@Param('id') id:string):Promise<ModifierGroup>{
        return this.MgService.getById(id);
    }
    @Delete('/:id')
    deleteMg(@Param('id') id : string){
        this.MgService.deleteMg(id);
    }
    


}
