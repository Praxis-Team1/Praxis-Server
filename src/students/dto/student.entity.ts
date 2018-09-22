import { Entity, OneToOne, JoinColumn, Column } from 'typeorm'
import { User } from 'users/dto/users.entity'

@Entity()
export class Student {

    @OneToOne(type => User, { primary: true })
    @JoinColumn()
    user: User;

    @Column()
    university: string;

    @Column()
    admited: boolean;

    @Column()
    semester: number;

    @Column()
    typeOfPraxis: string;

    @Column()
    videoUrl: string;
}