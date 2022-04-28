import { Module } from "@nestjs/common";
import { databaseDocumentsConnections, databaseProviders } from "./database.providers";

@Module({
  providers:[...databaseDocumentsConnections, ...databaseProviders],
  exports:[ ...databaseDocumentsConnections, ...databaseProviders]
})
export class DatabaseModule{}