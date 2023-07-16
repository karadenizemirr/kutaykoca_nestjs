import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


// Tüm duraklar burada yer alır.
@Entity('location')
export class Location {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    lat: string

    @Column()
    long: string

    @CreateDateColumn()
    createdAt: Date;
}