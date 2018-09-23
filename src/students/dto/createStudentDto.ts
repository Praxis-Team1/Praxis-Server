import { IsString, IsInt, IsIn, IsEmail, Contains, MinLength, Matches, IsBoolean, Max, IsUrl, IsOptional } from 'class-validator';
import { Entity, OneToOne, JoinColumn, Column } from 'typeorm'
import { User } from 'users/dto/users.entity'

@Entity()
export class CreateStudentDto {

    @IsInt()
    readonly documentNumber: number;

    @IsIn(["cedula de ciudadania", "tarjeta de identidad", "cedula de extranjeria"])
    readonly documentType: string;

    @IsString()
    readonly name: string;

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