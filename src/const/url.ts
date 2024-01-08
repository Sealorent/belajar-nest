import { Injectable } from '@nestjs/common';


@Injectable()
export class UrlService {
    user_service = process.env.URL_API_USER_SERVICE;
}