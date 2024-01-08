import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/user-sign-in.dto';
import { SignUpDto } from './dto/user-sign-up.dto';
import { UserService } from './user/user.service';


@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  // async signIn(signInDto : SignInDto) {

  //   const user = await this.userService.checkOfficer(signInDto);

  //   const payload = { email: signInDto.email, sub: signInDto.password };
  //   return {
  //     user : user,
  //     access_token: this.jwtService.sign( payload, { secret: process.env.JWT_SECRET }),
  //   };

  // }

    async signIn(signInDto: SignInDto){
      return await this.userService.checkOfficer(signInDto);
    }

    async signUp(signUpDto : SignUpDto){
      return await this.userService.signUpOfficer(signUpDto);
    }
  


}
