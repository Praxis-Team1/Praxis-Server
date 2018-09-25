import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { ApiModelProperty } from "@nestjs/swagger";

@Entity()
export class User {

    @ApiModelProperty({ required: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty({ required: true, uniqueItems: true })
    @Index({ unique: true })
    @Column({})
    documentNumber: number;

    @ApiModelProperty({ required: true })
    @Column()
    documentType: string;  //standardize the arrangement of valid items

    @ApiModelProperty({ required: true, maximum: 50 })
    @Column({
        type: "varchar",
        length: 50,
    })
    name: string;

    @ApiModelProperty({ required: true })
    @Column()
    birthdate: string;

    @ApiModelProperty({ required: true, uniqueItems: true })
    @Index({ unique: true })
    @Column()
    email: string;

    @ApiModelProperty({ required: true, maximum: 150 })
    @Column({
        type: "varchar",
        length: 150,
    })
    password: string;

    @ApiModelProperty({ required: true, maximum: 500 })
    @Column({
        type: "varchar",
        length: 500,
    })
    biography: string;

}