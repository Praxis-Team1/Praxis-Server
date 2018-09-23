import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator'

import { TYPES } from 'enums/documentTypes';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    documentNumber: number;

    @Column()
    documentType: string;

    @Column({
        type: "varchar",
        length: 50,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 50,
    })
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({
        type: "varchar",
        length: 150,
    })
    password: string;

    @Column({
        type: "varchar",
        length: 250,
    })
    biographic: string;

}