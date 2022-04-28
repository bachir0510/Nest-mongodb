export const databaseEnviroment = {
    development: {
      uri: process.env.DB_HOST,
      dbName: process.env.DB_DATABASE || 'school',
    },
    test: {
      autoCreate: true,
      user: process.env.DB_USERNAME || 'dbOwner',
      pass: process.env.DB_PASSWORD || 'admin',
      dbName: process.env.DB_DATABASE || 'data-validator',
    },
    production: {
      uri: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_DATABASE,
    },
  };