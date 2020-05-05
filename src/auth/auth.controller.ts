import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/loginDto';

@Controller('/api/auth')
export class AuthController {
    constructor(private authservice: AuthService) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserdto: CreateUserDto) {
        return this.authservice.signUp(createUserdto);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) credentials: LoginDto): Promise<{ accessToken: string }> {
        return this.authservice.signIn(credentials);
    }
    
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log(req);

    }
}
