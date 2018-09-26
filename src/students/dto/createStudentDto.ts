import { IsString, IsInt, IsIn, IsEmail, Contains, MinLength, Matches, IsBoolean, Max, IsUrl, IsOptional } from 'class-validator';
import { CreateUserDto } from '../../users/dto/createUserDto';
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";
import * as enums from '../../enums';

export class CreateStudentDto extends CreateUserDto {

    @ApiModelProperty({ required: true, enum: enums.UNIVERSITIES })
    @IsIn(enums.UNIVERSITIES)
    readonly university: string;

    @ApiModelProperty({ required: true })
    @IsInt()
    @Max(20)
    readonly semester: number;

    @ApiModelProperty({ required: true, enum: enums.PRAXIS_TYPES })
    @IsIn(enums.PRAXIS_TYPES)
    readonly typeOfPraxis: string;

    @ApiModelProperty({ required: true })
    @IsUrl()
    readonly videoUrl: string;
}