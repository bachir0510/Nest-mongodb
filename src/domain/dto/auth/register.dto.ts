import {IsEmail,MinLength, MaxLength} from "class-validator"
export class RegsisterDTO{
    @IsEmail()
    email:string;

    @MinLength(4)
    @MaxLength(20)
    password:string;
}