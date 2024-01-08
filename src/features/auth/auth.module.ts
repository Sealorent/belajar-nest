import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../database/userservice/entities/Users';
import { UrlService } from '../../const/url';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, UserService, UrlService],
})
export class AuthModule {}
