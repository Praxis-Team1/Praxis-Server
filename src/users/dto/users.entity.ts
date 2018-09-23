import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column({})
    documentNumber: number;

    @Column()
    documentType: string;  //standardize the arrangement of valid items

    @Column({
        type: "varchar",
        length: 50,
    })
    name: string;

    @Column()
    birthdate: string;

    @Index({ unique: true })
    @Column()
    email: string;

    @Index({ unique: true })
    @Column({
        type: "varchar",
        length: 150,
    })
    password: string;

    @Column({
        type: "varchar",
        length: 500,
    })
    biography: string;

}