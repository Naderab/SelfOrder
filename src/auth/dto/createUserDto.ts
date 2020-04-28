import { isString, IsString, IsEmail, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
  
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    readonly username: string;
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:'week password'})
    readonly password: string;
    @IsEmail()
    readonly email: string;


  }