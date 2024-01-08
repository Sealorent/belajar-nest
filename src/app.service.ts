import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService) {}
  
  getHello(): string {
    console.log('AppService getHello', this.configService.get('USER_SERVICE_DB_HOST'));
    console.log('AppService getHello', process.env.USER_SERVICE_DB_HOST);
    return this.configService.get('USER_SERVICE_DB_HOST')
  }
}
