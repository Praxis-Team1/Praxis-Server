import { Entity, OneToOne, JoinColumn, Column } from 'typeorm'
import { User } from '../../users/dto/users.entity'

@Entity()
export class Student {

    @Column( { primary: true })
    userId:number

    @OneToOne(type => User)
    @JoinColumn({ name: "userId" })
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