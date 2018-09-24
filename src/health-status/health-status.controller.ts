import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthStatusController {
    @Get('/')
    healthStatus(): any {
        return {
            message: "I'm ok"
        };
    }
}
