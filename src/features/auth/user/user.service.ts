import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../../database/userservice/entities/Users';
import * as bcrypt from 'bcrypt';
import { SignInDto } from '../dto/user-sign-in.dto';
import { UrlService } from '../../../const/url';
import { SignUpDto } from '../dto/user-sign-up.dto';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private  userRespository: Repository<Users>,
        private urlService: UrlService

    ) { }


    async checkOfficerRepo(signInDto : SignInDto) {
        
        const user = await this.userRespository.findOne({
            where: { email: signInDto.email },
        });
        
        if (!user) {
            return null;
        }

        const { password, randompass, ...result } = user;

        const passwordHash = randompass + signInDto.password;

        const passwordOfPhp = password.replace('$2y$', '$2a$');

        const isMatch = await bcrypt.compare(passwordHash, passwordOfPhp);
        
        if (!isMatch) {
            return null;
        }

    }

    async payloadOfficer(signInDto : SignInDto) {

        const createToken = Math.floor(Date.now() / 1000);

        // Expiration time (30 days from the issuance time)
        const expToken = createToken + 60 * 60 * 24 * 30;

        // Convert expiration time to a formatted date string (assuming you want the date in the format 'YYYY-MM-DD')
        const expDate = new Date(expToken * 1000).toISOString().split('T')[0];

        return {
            
        }
    }

    async checkOfficer(signInDto : SignInDto) {

        const dto = {
            email : signInDto.email,
            password : signInDto.password,
            token_fcm : signInDto.token_fcm ?? 'fr07KOE5SyWMJAwqnI5o1w:APA91bEehyCq1c95oLZEMTpBf8MFl7A99YME3WxCU5tg75QXAraIbJD4RF7tyYl-btleBrQPyqG-4KhFJCkZwiq08QCfEYfvgKTYcp7QMrdVnhYWrib6cJxHzmjDn--xh_RaEm1Sgs49'
        }

        const result = await fetch(`${this.urlService.user_service}/officers/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dto),
        });
        
        return await result.json();

    }

    async signUpOfficer(signUpDto : SignUpDto){
        
        const response = await fetch(`${this.urlService.user_service}/officers/sign-up`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(signUpDto)
        })
        
        const result = await response.json();

        if(!result.success){
            return {
                success : result.success,
                message : result.message.email[0] ?? result.message.password ?? result.message.name ?? result.message.phone
            }
        }

        return {
            success : result.success,
            message : result.message
        }

    }


}
