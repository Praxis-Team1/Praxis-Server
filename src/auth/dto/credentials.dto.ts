import { ApiModelProperty } from "@nestjs/swagger";

export class CredentialsDTO {

    @ApiModelProperty({ required: true })
    email: string;

    @ApiModelProperty({ required: true })
    password: string
}