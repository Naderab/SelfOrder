import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ModifierGroupModule } from './modifier-group/modifier-group.module';
import { CategoryModule } from './category/category.module';
import { ItemsModule } from './items/items.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://niz:vRDveD5JR8EfnnPQ@cluster0-shard-00-00-jb8hh.mongodb.net:27017,cluster0-shard-00-01-jb8hh.mongodb.net:27017,cluster0-shard-00-02-jb8hh.mongodb.net:27017/selfOrder?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:false
}), 
MenusModule,
 AuthModule,
 ModifierGroupModule, 
 CategoryModule, 
 ItemsModule
 ],
  
})
export class AppModule {}
