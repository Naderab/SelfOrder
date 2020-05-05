import { isString, IsString, IsEmail, MinLength, MaxLength, Matches } from "class-validator";

export class LoginDto {
  
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:'week password'})
    readonly password: string;
    @IsEmail()
    readonly email: string;


  }