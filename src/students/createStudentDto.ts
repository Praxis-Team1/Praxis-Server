import { IsString, IsInt, IsIn, IsAlpha, IsEmail, Contains, MinLength, Matches, IsAlphanumeric, IsBoolean, Max, IsUrl, IsOptional } from 'class-validator';

export class CreateStudentDto{
    @IsInt()
    readonly documentNumber: number;
    @IsIn(["cedula de ciudadania", "tarjeta de identidad", "cedula de extranjeria"])
    readonly documentType;
    @IsString()
    readonly name: string;
    @IsString()
    readonly lastName: string;
    @Contains("unal.edu.co")
    @IsEmail()
    readonly email: string;
    @MinLength(8)
    @Matches(/^(?=.*[A-Z]).+$/) //UPPERCASE
    @Matches(/^(?=.*[a-z]).+$/) //LOWERCASE
    @Matches(/^(?=.*[0-9_\W]).+$/) //SPECIAL
    readonly password: string;
    @IsOptional()
    @IsString()
    readonly biographic: string;
    @IsIn(["Universidad Nacional de Colombia"])
    readonly university: string;
    @IsBoolean()
    readonly admited: boolean;
    @IsInt()
    @Max(20)
    readonly semester: string;
    @IsIn(['first job', 'practice one semester later', 'practice two semester later'])
    readonly typeOfPraxis: string;
    @IsUrl()
    readonly videoUrl: string;
}