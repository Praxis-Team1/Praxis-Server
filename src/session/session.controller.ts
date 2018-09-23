import { Controller, Get, UseGuards } from '@nestjs/common';
import { SessionService } from './session.service';
import { FindOperator } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';

@Controller('session')
export class SessionController {
    constructor(private readonly sessionService: SessionService){}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    FindAll(){
        return this.sessionService.findAll();
    }
}
