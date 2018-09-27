import { Entity, OneToOne, JoinColumn, Column } from 'typeorm'
import { User } from '../../users/dto/users.entity'
import { IsIn } from 'class-validator';
import * as enums from '../../enums'

@Entity()
export class Student {

    @Column({ primary: true })
    userId: number

    @OneToOne(type => User)
    @JoinColumn({ name: "userId" })
    user: User;

    @Column()
    university: string;

    @IsIn(enums.ADMITED_TYPES)
    @Column()
    admited: string;

    @Column()
    semester: number;

    @Column()
    typeOfPraxis: string;

    @Column()
    videoUrl: string;
}