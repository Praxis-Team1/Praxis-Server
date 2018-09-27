import { Entity, OneToOne, JoinColumn, Column } from 'typeorm'
import { User } from '../../users/dto/users.entity'


@Entity()
export class Administrator {


    
    @OneToOne(type => User)
    @JoinColumn({name: "userId"})
    user: User;

    @Column({ primary: true })
    userId:number


}
