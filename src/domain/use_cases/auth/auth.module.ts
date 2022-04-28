import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstanst } from 'src/app/controller/constantes';
import { User, UserSchema } from 'src/domain/schemas/user.schema';
import { LoginAuth } from './login.auth';
import { RegisterAuth } from './register.auth';


@Module({
  imports:[
  
  JwtModule.register({
      secret: jwtConstanst.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers:[LoginAuth, RegisterAuth],
  exports :[LoginAuth, RegisterAuth]
})
export class AuthModule {}