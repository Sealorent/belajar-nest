import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/user-sign-in.dto';
import { SignUpDto } from './dto/user-sign-up.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
     return this.authService.signIn(signInDto);
  }

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto){
    return this.authService.signUp(signUpDto);
  }
}
