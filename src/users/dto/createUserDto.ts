import { IsString, IsDateString, IsInt, IsIn, IsEmail, Contains, MinLength, Matches, IsBoolean, Max, IsUrl, IsOptional, IsDate } from 'class-validator';

export class CreateUserDto {

    @IsInt()
    readonly documentNumber: number;

    @IsIn(["cedula de ciudadania", "tarjeta de identidad", "cedula de extranjeria"])
    readonly documentType: string;

    @IsString()
    readonly name: string;

    @IsDateString()
    birthdate: string;

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
    readonly biography: string;

}