import { Injectable } from '@nestjs/common';

import * as sendGrid from '@sendgrid/mail';

import { sendEmailDto } from '../dto/sendEmailDto'

@Injectable()
export class EmailService {

    constructor() {

        sendGrid.setApiKey(process.env.SENDGRID);
    }

    async sendEmail(email: sendEmailDto): Promise<any> {
        return await sendGrid.send(email);
    }

    async successfulSignUp(email: string, name: string): Promise<any> {

        const successfulSignUpEmail = new sendEmailDto(
            email,
            process.env.SENDGRID_FROM,
            process.env.SENDGRID_SUCCESSFUL_ID,
            {
                name,
            }
        );

        return await this.sendEmail(successfulSignUpEmail);
    }

    async resultTrue(email: string, name: string): Promise<any> {

        const successfulSignUpEmail = new sendEmailDto(
            email,
            process.env.SENDGRID_FROM,
            process.env.SENDGRID_RESULT_TRUE_ID,
            {
                name

            }
        );

        return await this.sendEmail(successfulSignUpEmail);
    }

    async resultFalse(email: string, name: string): Promise<any> {

        const successfulSignUpEmail = new sendEmailDto(
            email,
            process.env.SENDGRID_FROM,
            process.env.SENDGRID_RESULT_FALSE_ID,
            {
                name
            }
        );

        return await this.sendEmail(successfulSignUpEmail);
    }
}
