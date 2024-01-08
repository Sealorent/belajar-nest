import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyticsModule } from './features/analytics/analytics.module';
import { AuthModule } from './features/auth/auth.module';
import { UserServiceDb } from './database/data-source';
import { SetupConfig, SetupThrottler } from './helpers/config.module';


@Module({
  imports: [
    // helpers
    SetupConfig,
    SetupThrottler,

    // features
    AnalyticsModule,
    AuthModule,

    // db
    UserServiceDb,
    // RegistrationServiceDb,

    // const
    // UrlService,



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('Node Env', process.env.NODE_ENV);
    console.log('AppModule constructor', `${process.cwd()}/.env.${process.env.NODE_ENV}`);
    console.log('JWT_SECRET', process.env.JWT_SECRET);
    console.log('URL_API_USER_SERVICE:', process.env.URL_API_USER_SERVICE);
  }
}
