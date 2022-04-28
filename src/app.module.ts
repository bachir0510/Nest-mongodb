import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ControllersV1Module } from './app/controller/controllersV1.module';
import { databaseDocumentsConnections, databaseProviders } from './infrastructure/database/database.providers';



@Module({
  imports: [
    DatabaseModule,
    ControllersV1Module,
    // MongooseModule.forRoot('mongodb://localhost/school'),
    
  ],
  providers:[DatabaseModule,
    ...databaseDocumentsConnections,
    ...databaseProviders,]
})
export class AppModule {}
