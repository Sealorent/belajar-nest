import { Controller, Get , Post , Body, Query} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Users } from '../../database/userservice/entities/Users';
import { CreateUsersDto } from './dto/create-users.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CourseDto } from './dto/course.dto';

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

    @Get('regcodes')
    @ApiQuery({ name: 'year', type: 'number', required: true })
    @ApiQuery({ name: 'month', type: 'number', required: true })
    getAllDataRegcodes(@Query('year') year: number, @Query('month') month: number) {
      // You can access the year and month parameters here and use them in your service
      const courseDto: CourseDto = { year, month };
      return this.service.getAllDataRegcodes(courseDto);
    }

    @Get('year')
    getYear(){
        return this.service.getYear();
    }

    @Get('month')
    getMonth(){
        return this.service.getMonth();
    }



    // @Get('datasource')
    // usingDataSource(){
    //     return this.service.usingDataSource();
    // }


}
