import { Controller, Get , Post , Body} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Users } from '../../database/userservice/entities/Users';
import { CreateUsersDto } from './dto/create-users.dto';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {

    constructor(private service: AnalyticsService) { }

    
    @Get('test')
    test(){
        return this.service.test();
    }

    @Get('query')
    usingQuery(){
        return this.service.usingQuery();
    }

    @Post('datasource')
    @ApiBody({ type: CreateUsersDto, isArray: true }) 
    usingDataSource(@Body() users: CreateUsersDto[]){
        return this.service.usingDataSource(users);
    }

    @Post('create')
    @ApiBody({ type: CreateUserDto, isArray: true })
    createUser(@Body() users: CreateUsersDto[]){
        return this.service.createUser(users);
    }



    // @Get('datasource')
    // usingDataSource(){
    //     return this.service.usingDataSource();
    // }


}
