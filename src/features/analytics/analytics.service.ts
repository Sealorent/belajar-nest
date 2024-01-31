import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from '../../database/mongo/schema/lead.schema';

@Injectable()
export class AnalyticsService {
    
    constructor(
       
        @InjectModel(Lead.name)
        private   leadModel : Model<Lead>,
        
    ) {}
    
    async createLead(lead: CreateLeadDto) {
        const newLead = new this.leadModel(lead);
        return newLead.save();
    }

}
