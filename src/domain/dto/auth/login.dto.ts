import { RegsisterDTO } from "./register.dto";
import {IsNotEmpty} from "class-validator"

export class LoginDTO extends RegsisterDTO{
    
    @IsNotEmpty()
    name:string;

}
