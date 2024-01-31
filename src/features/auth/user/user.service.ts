import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../../database/user-service/entities/Users';
import * as bcrypt from 'bcrypt';
import { SignInDto } from '../dto/user-sign-in.dto';
import { SignUpDto } from '../dto/user-sign-up.dto';
import { URL_API } from '../../../const/url-api';
import { AsyncLocalStorage } from 'async_hooks';


@Injectable()
export class UserService {

    constructor(
        private readonly als : AsyncLocalStorage<any>,
    ){}
    
    async signInOfficer(signInDto : SignInDto) {

        const dto = {
            email : signInDto.email,
            password : signInDto.password,
            token_fcm : signInDto.token_fcm || 'fr07KOE5SyWMJAwqnI5o1w:APA91bEehyCq1c95oLZEMTpBf8MFl7A99YME3WxCU5tg75QXAraIbJD4RF7tyYl-btleBrQPyqG-4KhFJCkZwiq08QCfEYfvgKTYcp7QMrdVnhYWrib6cJxHzmjDn--xh_RaEm1Sgs49'
        }

        const response = await fetch(`${URL_API.user_service}/officers/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dto),
        });

        
        const result = await response.json();

        
        return result;

    }

    async signUpOfficer(signUpDto : SignUpDto){
        
        const response = await fetch(`${URL_API.user_service}/officers/sign-up`,{
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
