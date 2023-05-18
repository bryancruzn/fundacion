import { Module } from '@nestjs/common';
//import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://127.0.0.1/personal'), 
    ApiModule,
    ConfigModule.forRoot({isGlobal:true}),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
