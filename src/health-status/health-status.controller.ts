import { Controller, Get } from '@nestjs/common';
import { ApiUseTags, ApiOkResponse } from '@nestjs/swagger';

@ApiUseTags('health-status')
@Controller()
export class HealthStatusController {

    @ApiOkResponse({ description: 'The server is working' })
    @Get('/')
    healthStatus(): any {
        return {
            message: "I'm ok"
        };
    }
}
