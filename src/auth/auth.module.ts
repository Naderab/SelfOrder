import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jjwt.stategy';

@Module({
  imports: [JwtModule.register({
    secret:'topSecret51',
    signOptions:{
      expiresIn:3600,
    },
  }),
  PassportModule.register({
    defaultStrategy:'jwt'
  }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports:[JwtStrategy,PassportModule]
})
export class AuthModule {}
