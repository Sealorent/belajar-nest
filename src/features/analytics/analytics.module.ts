import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead, LeadSchema } from '../../database/mongo/schema/lead.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: Lead.name, 
        schema: LeadSchema 
      }
    ])
  ],

  providers: [AnalyticsService],
  controllers: [AnalyticsController]
})
export class AnalyticsModule {}
