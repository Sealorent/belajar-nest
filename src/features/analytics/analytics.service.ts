import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../database/userservice/entities/Users';
import { User } from '../../database/userservice/entities/User';
import { CreateUsersDto } from './dto/create-users.dto';
import { CreateUserDto } from './dto/create-user.dto';



@Injectable()
export class AnalyticsService {
    
    constructor(
        @InjectRepository(Users)
        private  userRespository: Repository<Users>,
        private  dataSource: DataSource

    ) {}
    
    test() {
        return this.userRespository.find();
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
                .into(User) // Assuming your entity is named User and mapped to the users table
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
