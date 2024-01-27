import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../database/userservice/entities/Users';
import { CreateUsersDto } from './dto/create-users.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Regcodes } from '../../database/userservice/entities/Regcodes';
import { CourseDto } from './dto/course.dto';



@Injectable()
export class AnalyticsService {
    
    constructor(

        @InjectRepository(Users)
        private  userRespository: Repository<Users>,

        @InjectRepository(Regcodes)
        private  regcodesRespository: Repository<Regcodes>,
        
        private  dataSource: DataSource

    ) {}
    
    test() {
        return this.userRespository.find();
    }

    getYear() {
        return this.regcodesRespository.query(
            'SELECT YEAR(periode) AS year, YEAR(periode) as uid FROM regcodes GROUP BY year'
        );
    }

   async getMonth() {
        const result = await this.regcodesRespository.query(
            'SELECT MONTH(periode) AS month FROM regcodes GROUP BY month'
        );
    
        const monthNames = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Augustus',
            'September', 'October', 'November', 'Desember'
        ];
    
        const mappedResult = result.map(item => ({
            uid: item.month,
            month: monthNames[item.month - 1],  // Adjust for zero-based indexing
        }));
    
        return mappedResult;


    }

    getAllDataRegcodes(course : CourseDto) {
        return this.regcodesRespository.query(
            'SELECT course_name AS name, periode, COUNT(*) AS total FROM regcodes WHERE YEAR(periode) = ? AND MONTH(periode) = ? GROUP BY course_name',
            [course.year, course.month]
        );
    }

    usingQuery() {
        return this.userRespository.query('SELECT * FROM regcodes');
    }

    async usingDataSource(users: CreateUsersDto[]){
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            users.forEach(element => async () => {
                await queryRunner.manager.save(element)
            });

            await queryRunner.commitTransaction();
        } catch (err) {
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
    }


    async createUser(users: CreateUserDto[]) {

        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            for (const user of users) {
                console.log(user);
                await queryRunner.manager
                .createQueryBuilder()
                .insert()
                .into(Users) // Assuming your entity is named User and mapped to the users table
                .values({ name: user.name })
                .execute();
              }

            await queryRunner.commitTransaction();

            return {
                status: 'success',
                message: 'User created successfully',
                data: null,
            }

        } catch (err) {
            await queryRunner.rollbackTransaction();

            return {
                status: 'error',
                message: 'User created failed',
                data: null,
            }

        } finally {
            await queryRunner.release();
        }

        
    }




}
