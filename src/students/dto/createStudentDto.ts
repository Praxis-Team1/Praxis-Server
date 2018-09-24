import { IsString, IsInt, IsIn, IsEmail, Contains, MinLength, Matches, IsBoolean, Max, IsUrl, IsOptional } from 'class-validator';
import { CreateUserDto } from '../../users/dto/createUserDto';

export class CreateStudentDto extends CreateUserDto {

    @IsIn(["Universidad Nacional de Colombia"])
    readonly university: string;

    @IsInt()
    @Max(20)
    readonly semester: number;

    @IsIn(['first job', 'practice one semester later', 'practice two semester later'])
    readonly typeOfPraxis: string;

    @IsUrl()
    readonly videoUrl: string;
}