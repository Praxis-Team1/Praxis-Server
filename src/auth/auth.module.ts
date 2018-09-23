import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'users/repository/users.module';
import { AuthController } from './auth.controller';

require('dotenv').config()
@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWTsecretOrPrivateKey,
      signOptions: {
        expiresIn: process.env.JWTexpiresIn,
      },
    }),
    UsersModule
  ],
  controllers: [AuthController],
})
export class AuthModule {}
