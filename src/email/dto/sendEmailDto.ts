import { MailData } from '@sendgrid/helpers/classes/mail';

export class sendEmailDto implements MailData {

    constructor(
        readonly to: string,
        readonly from: string,
        readonly templateId: string,
        readonly dynamic_template_data: object,
    ) {

    }
}