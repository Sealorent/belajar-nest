import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../database/userservice/entities/Users';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      Users
    ]),
  ],
  exports: [
    TypeOrmModule
  ],
  providers: [AnalyticsService],
  controllers: [AnalyticsController]
})
export class AnalyticsModule {}
