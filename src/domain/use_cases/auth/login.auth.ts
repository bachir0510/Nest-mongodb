import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/domain/schemas/user.schema';
import { Model } from 'mongoose';
import { LoginDTO } from 'src/domain/dto/auth/login.dto';
import { compare } from 'bcrypt';
import {JwtService} from '@nestjs/jwt'


@Injectable()
export class LoginAuth {
  constructor(
    @Inject(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async call(userObject: LoginDTO) {
    const { email, password } = userObject;
   
    const user = await this.userModel.findOne({ email });
    if (user) new HttpException('user not exit', 404);
    
    const checkPassword = await compare(password,user.password)
    if(!checkPassword) new HttpException('Incorrect Password',403)

    const payload = {id:user._id, name:user.userName}
    const token = await this.jwtService.sign(payload)

    const data ={
        user,
        token
    };
    return data
}
}
