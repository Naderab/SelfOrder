import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/auth')
export class AuthController {
    constructor(private authservice:AuthService){}
    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserdto:CreateUserDto){
return this.authservice.signUp(createUserdto);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) createUserdto:CreateUserDto):Promise<{accessToken:string}>{
return this.authservice.signIn(createUserdto);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req){
        console.log(req);

    }
}
