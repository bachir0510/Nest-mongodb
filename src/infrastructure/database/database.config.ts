import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { databaseEnviroment } from './database.environment';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  readonly nodeEnv = process.env.NODE_ENV || 'development';
  readonly dbCreateOrUpdate = process.env.DB_CREATE_UPDATE || false;

  createMongooseOptions(): MongooseModuleOptions {
    return {
      useNewUrlParser: true,
      ...databaseEnviroment[this.nodeEnv],
      useFindAndModify: this.dbCreateOrUpdate,
      useCreateIndex: true,
    };
  }
}
