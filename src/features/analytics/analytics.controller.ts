import { Controller, Get , Post , Body, Query, Req} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ApiTags, ApiBody, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { CreateLeadDto } from './dto/create-lead.dto';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {

    constructor(

        private service: AnalyticsService

    ) { }
    

    @Post('lead')
    @ApiBearerAuth('access-token')
    @ApiBody({ type: CreateLeadDto })
    createLead(@Body() lead: CreateLeadDto ,@Req() req: any){
        console.log('Header:', req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1]; // Assuming Bearer token is in the format "Bearer <token>"
        console.log('Bearer token:', token);
        return this.service.createLead(lead);
    }


}
