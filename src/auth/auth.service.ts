import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUserDto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload';
import { LoginDto } from './dto/loginDto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('User') private UserModel: Model<User>,
        private jwtService: JwtService
    ) { }
    async signUp(createUserDto: CreateUserDto): Promise<User> {
        const { username, password, email } = createUserDto;

        const salt = await bcrypt.genSalt();

        const user = new this.UserModel();
        user.username = username;
        user.password = await this.hashPass(password, salt);
        user.email = email;
        user.salt = salt;
        return await user.save();

    }
    async signIn(user: LoginDto): Promise<{ accessToken: string }> {
        const username = await this.validateUserPassword(user);
        if (!username) {
            throw new UnauthorizedException('invalid credentials')
        }

        const payload: JwtPayload = { username };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
    async validateUserPassword(credentials: LoginDto): Promise<string> {
        const { email, password } = credentials;
        const user = await this.UserModel.findOne({ email })
        const hash = await bcrypt.hash(password, user.salt);
        if (hash === user.password) {
            return user.username;
        }
        else {
            return null;
        }
    }



    private async hashPass(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

}
