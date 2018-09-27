import { IsString, IsDateString, IsInt, IsIn, IsEmail, Contains, MinLength, Matches, IsBoolean, Max, IsUrl, IsOptional, IsDate } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import * as enums from '../../enums';
export class CreateUserDto {

    @ApiModelProperty({ required: true })
    @IsInt()
    readonly documentNumber: number;

    @ApiModelProperty({ required: true, enum: enums.DOCUMENT_TYPES })
    @IsIn(enums.DOCUMENT_TYPES)
    readonly documentType: string;

    @ApiModelProperty({ required: true })
    @IsString()
    readonly name: string;

    @ApiModelProperty({ required: true })
    @IsDateString()
    birthdate: string;

    @ApiModelProperty({ required: true, pattern: '*@unal.edu.co' })
    @Contains("unal.edu.co")
    @IsEmail()
    readonly email: string;

    @ApiModelProperty({ required: true, minimum: 8 })
    @MinLength(8)
    @Matches(/^(?=.*[A-Z]).+$/) //UPPERCASE
    @Matches(/^(?=.*[a-z]).+$/) //LOWERCASE
    @Matches(/^(?=.*[0-9_\W]).+$/) //SPECIAL
    readonly password: string;

    @ApiModelPropertyOptional({ maximum: 500 })
    @IsOptional()
    @IsString()
    readonly biography: string;

}