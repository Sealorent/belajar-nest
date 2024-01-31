import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { AsyncLocalStorage } from 'async_hooks';

@Module({
  imports: [
  ],
  controllers: [
    AuthController
  ],
  
  providers: [
    AuthService, 
    JwtService, 
    UserService, 
    {
      provide: AsyncLocalStorage,
      useValue: new AsyncLocalStorage(),
    },

  ],
  exports: [
    AsyncLocalStorage
  ]
})
export class AuthModule {}
