import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()

    date: Date;

    @Column()
    site: string;

    @Column()
    teacher: string;
}