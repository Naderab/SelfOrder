import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {

    @Get('test')
    test(){
        console.log('test')
    }
}
