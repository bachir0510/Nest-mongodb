import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/domain/schemas/user.schema";
import {Model} from "mongoose";
import { RegsisterDTO } from "src/domain/dto/auth/register.dto";
import {hash} from "bcrypt"

@Injectable()
export class RegisterAuth{
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}
    
    async call(userObject: RegsisterDTO){
        const {password} = userObject;
        const hashPassword = await hash(password,10);
        userObject = {...userObject, password:hashPassword};
        return this.userModel.create(userObject)
    }
}