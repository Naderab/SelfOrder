import { PassportStrategy } from '@nestjs/passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtPayload } from './jwt-payload';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor( @InjectModel('User') private UserModel: Model<User>,){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'topSecret51',
        });
    }
    async validate(payload:JwtPayload):Promise<User>{

        const  {username} = payload;
        const user = await this.UserModel.findOne({username});
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}