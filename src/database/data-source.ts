import { TypeOrmModule } from "@nestjs/typeorm"
import { join } from 'path';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";


const UserServiceDb = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('USER_SERVICE_DB_HOST'),
        port: config.get<number>('USER_SERVICE_DB_PORT'),
        username: config.get<string>('USER_SERVICE_DB_USERNAME'),
        password: config.get<string>('USER_SERVICE_DB_PASSWORD'),
        database: config.get<string>('USER_SERVICE_DB_DATABASE'),
        synchronize: false,
        entities: [
            join(__dirname, '/userservice/entities/*{.ts,.js}'),
        ],
        // migrations: ['dist/migrations/**/*.js'],
        // subscribers: ['dist/subscriber/**/*.js'],
        // cli: {
        //     migrationsDir: config.get<string>('TYPEORM_MIGRATIONS_DIR'),
        //     subscribersDir: config.get<string>('TYPEORM_SUBSCRIBERS_DIR'),
        // },
    }),
});

    
const MarketingDb = MongooseModule.forRoot('mongodb://root:lcbisa88@173.212.232.47:8091/test?authSource=admin');

const RegistrationServiceDb = TypeOrmModule.forRoot({
    type: 'mysql',
    host: '103.74.5.92',
    port: 2023,
    username: 'root',
    password: 'bhBtMZL2bV@uTqS',
    database: 'UserDB_KIMO',
    entities: [
        join(__dirname, '/userservice/entities/*{.ts,.js}'),
    ],
    synchronize: false,
})



export { UserServiceDb, RegistrationServiceDb, MarketingDb }
