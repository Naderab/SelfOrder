import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuSchema } from './schemas/Manur.schema';


@Module({
  imports:[ MongooseModule.forFeature([
    { name: 'Menu', schema: MenuSchema }
  ])
  ],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
