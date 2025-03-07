import { Auth } from "src/auth/entities/auth.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    position: string;

    @OneToOne(() => Auth, { cascade: true, eager: true })
    @JoinColumn()
    auth: Auth;

}
