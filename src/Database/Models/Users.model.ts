import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./Base.model";

@Entity('users')
export class UsersModel extends BaseEntity {
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;


}