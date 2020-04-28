import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://niz:vRDveD5JR8EfnnPQ@cluster0-shard-00-00-jb8hh.mongodb.net:27017,cluster0-shard-00-01-jb8hh.mongodb.net:27017,cluster0-shard-00-02-jb8hh.mongodb.net:27017/selfOrder?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:false
}), AuthModule],
  
})
export class AppModule {}
