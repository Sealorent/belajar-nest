import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/user-sign-in.dto';
import { SignUpDto } from './dto/user-sign-up.dto';
import { UserService } from './user/user.service';


@Injectable()
export class AuthService {

  constructor(
    // private jwtService: JwtService,
    private userService: UserService
  ) {}

    async signIn(signInDto: SignInDto){
      return await this.userService.signInOfficer(signInDto);
    }

    async signUp(signUpDto : SignUpDto){
      return await this.userService.signUpOfficer(signUpDto);
    }
  


}
