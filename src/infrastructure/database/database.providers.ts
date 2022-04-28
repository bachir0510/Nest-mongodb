import * as mongoose from 'mongoose';
import * as autoIncrement from 'mongoose-auto-increment';
import { Student, StudentSchema } from 'src/domain/schemas/student.schema';
import { User, UserSchema } from 'src/domain/schemas/user.schema';
import { DB_PROVIDER } from './database.constants';
import * as databaseEnvironment from './database.environment';

const nodeEnv = process.env.NODE_ENV || 'development';
const dbCreateOrUpdate = process.env.DB_CREATE_UPDATE || false;

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      
  
  return mongoose.connect(
        process.env.DB_HOST,
        
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          ...databaseEnvironment[nodeEnv],
          useFindAndModify: dbCreateOrUpdate,
          useUnifiedTopology: true,
        
        },
      );
      
    },
  },
];

export const databaseDocumentsConnections = [
  {
    provide: Student.name,
    useFactory: (connection: mongoose.Connection) =>
      connection.model(Student.name, StudentSchema),
    inject: [DB_PROVIDER],
  },

  {
    provide: User.name,
    useFactory: (connection: mongoose.Connection) =>
      connection.model(User.name, UserSchema),
    inject: [DB_PROVIDER],
  },
];
