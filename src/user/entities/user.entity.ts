import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @Column({ unique: true })
    email: string;

    @Column()
    role: string;

    @Column("simple-array", { nullable: true })
    skills?: string[];

    @Column({ nullable: true })
    team?: string;

    @Column({ nullable: false })
    password: string;
}
